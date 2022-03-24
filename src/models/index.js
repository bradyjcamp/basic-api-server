'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const vehicleSchema = require('./vehicles');
const personSchema = require('./person');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL || 'postgresql://localhost:5432/basic-api-server';

const db = new Sequelize(DATABASE_URL);
const VehicleModel = vehicleSchema(db, DataTypes);
const PersonModel = personSchema(db, DataTypes);

module.exports = {
  db,
  VehicleModel,
  PersonModel,
};
