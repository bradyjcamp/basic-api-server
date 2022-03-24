'use strict';

const { db } = require('./src/models/index');


db.sync() // creates all associated tables and verifies connection
  .then(() => {
    console.log('Success!!');
  })
  .catch(err => {
    console.error(err);
  });