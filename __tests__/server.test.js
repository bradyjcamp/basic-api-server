'use strict';

const { db } = require('../src/models/index.js');
const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});


describe('Testing REST API', () => {

  test('Should create a vehicle' , async () => {
    let response = await request.post('/vehicles').send({
      class: 'test',
      model: 'tester',
      color: 'tested',
    });

    expect(response.status).toEqual(200);
    expect(response.body.class).toEqual('test');
    expect(response.body.model).toEqual('tester');
    expect(response.body.color).toEqual('tested');
  });

  
  test('Should read all from vehicle' , async () => {
    let response = await request.get('/vehicles');
    
    expect(response.status).toEqual(200);
    expect(response.body.class).toEqual('test');
    expect(response.body.model).toEqual('tester');
    expect(response.body.color).toEqual('tested');
  });
  
  test('Should read from vehicle' , () => {
  
  });

  test('Should update a vehicle' , () => {

  });

  test('Should delete a vehicle' , () => {

  });


  test('Respond with a status 404 to a GET request with no route', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(404);
  });

  test('Respond with a status 404 on bad GET request method', async () => {
    const response = await request.get('/vehicles'); 
    expect(response.status).toEqual(404);
  });
});