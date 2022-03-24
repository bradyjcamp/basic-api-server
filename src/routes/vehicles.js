'use strict';

const express = require('express');
const { VehicleModel } = require('../models/index.js');
const app = express();
const router = express.Router();
app.use(express.json());

const addVehicle = async (req, res, next) => {
  let newVehicleData = req.body;
  let responseData = await VehicleModel.create(newVehicleData);
  res.send(responseData);
};

const getAllVehicles =  async (req, res, next) => {
  let allVehicleData = await VehicleModel.findAll();
  res.send(allVehicleData);
};

const getOneVehicle = async (req, res, next) => {
  let specificVehicle = req.params.id;
  let query = { where: {id: specificVehicle} };

  let oneVehicle = await VehicleModel.findOne(query);
  res.send(oneVehicle);
};

const updateVehicle = async (req, res, next) => {
  let specificVehicle = req.params.id;
  let query = { where: {id: specificVehicle} };

  let oneVehicle = await VehicleModel.update(query);
  res.send(oneVehicle);
};

const deleteVehicle = async (req, res, next) => {
  let specificVehicle = req.params.id;
  let query = { where: {id: specificVehicle} };

  let vehicleToRemove = await VehicleModel.findOne(query);
  await VehicleModel.destoy(query);
  res.send(vehicleToRemove);
};


router.post('/vehicles', addVehicle);
router.get('/vehicles', getAllVehicles);
router.get('vehicle/:id', getOneVehicle);
router.put('/vehicle/:id', updateVehicle);
router.delete('/vehicle/:id', deleteVehicle);



module.exports = router;
