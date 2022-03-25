'use strict';

const express = require('express');
const vehicleRouter = require ('./routes/vehicles.js');
const personRouter = require('./routes/person.js');
const handleError500 = require('./error-handlers/500');
const handleError404 = require('./error-handlers/404');
const app = express();
app.use(express.json());

app.use(vehicleRouter);
app.use(personRouter);
app.use(handleError404);
app.use(handleError500);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Server Listening on ${PORT}`);
    });
  },
};   

 
