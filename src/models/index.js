'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const vehicleSchema = require('./vehicles');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL || 'postgresql://localhost:5432/basic-api-server';

const db = new Sequelize(DATABASE_URL);
const VehicleModel = vehicleSchema(db, DataTypes);

module.exports = {
  db,
  VehicleModel,
};
