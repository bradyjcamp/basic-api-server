'use strict';

const express = require('express');
const { PersonModel } = require('../models/index.js');
const app = express();
const router = express.Router();
app.use(express.json());

const addPerson = async (req, res, next) => {
  let newPersonData = req.body;
  let responseData = await PersonModel.create(newPersonData);
  res.send(responseData);
};

const getAllPersons =  async (req, res, next) => {
  let allPersonData = await PersonModel.findAll();
  res.send(allPersonData);
};

const getOnePerson = async (req, res, next) => {
  let specificPerson = req.params.id;
  let query = { where: {id: specificPerson} };
  
  let onePerson = await PersonModel.findOne(query);
  res.status(200).send(onePerson);
};

const updatePerson = async (req, res, next) => {
  let specificPerson = req.params.id;
  let query = { where: {id: specificPerson} };
  
  let onePerson = await PersonModel.update(query);
  res.send(onePerson);
};

const deletePerson = async (req, res, next) => {
  let specificPerson = req.params.id;
  let query = { where: {id: specificPerson} };
  
  let personToRemove = await PersonModel.findOne(query);
  await PersonModel.destoy(query);
  res.send(personToRemove);
};


router.post('/person', addPerson);
router.get('/person', getAllPersons);
router.get('/person/:id', getOnePerson);
router.put('/person/:id', updatePerson);
router.delete('/person/:id', deletePerson);



module.exports = router;