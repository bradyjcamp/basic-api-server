'use strict';

const express = require('express');
const vehicleRouter = require ('./routes/vehicles.js');
const personRouter = require('./routes/person.js');
const app = express();
app.use(express.json());

app.use(vehicleRouter);
app.use(personRouter);


module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Server Listening on ${PORT}`);
    });
  },
};   

 
