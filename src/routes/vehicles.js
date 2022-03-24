'use strict';

const express = require('express');
const { VehicleModel } = require('../models/index.js');
const app = express();
const router = express.Router();
app.use(express.json());

const addVehicle = async (req, res, next) => {
  let newVehicleData = req.body;
  let responseData = await VehicleModel.create(newVehicleData);
  res.status(200).send(responseData);
};

const getAllVehicles =  async (req, res, next) => {
  let allVehicleData = await VehicleModel.read();
  res.status(200).send(allVehicleData);
};

const getOneVehicle = async (req, res, next) => {
  let oneVehicle = req.params.id;
  let responseData = await VehicleModel.read(oneVehicle);
  res.status(200).send(responseData);
};

const updateVehicle = async (req, res, next) => {
  let updateVehicleData = req.body;
  let specificVehicle = req.params.id;
  let responseData = await VehicleModel.update(updateVehicleData,specificVehicle);
  res.status(200).send(responseData);
};

const deleteVehicle = async (req, res, next) => {
  let vehicle = req.params.id;
  let responseData = await VehicleModel.delete(vehicle);
  res.status(200).send(responseData);
};


router.post('/vehicles', addVehicle);
router.get('/vehicles', getAllVehicles);
router.get('vehicle/:id', getOneVehicle);
router.put('/vehicle/:id', updateVehicle);
router.delete('/vehicle/:id', deleteVehicle);



module.exports = router;