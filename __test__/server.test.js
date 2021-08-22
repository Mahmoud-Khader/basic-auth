'use strict';
const {app} = require('../src/server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(app);
const base64 = require('base-64');

describe('my API Server', ()=> {

    // add scenarios & test cases 
    it('handles 404 on a bad route', async () => {
       
        const response = await request.get('/asd'); // async
        expect(response.status).toEqual(404);
    });


    it('handles 404 on a bad method', async () => {
    
        const response = await request.post('/'); // async
        expect(response.status).toEqual(404);
    });



    it('200 get route /', async () => {
        const response = await request.get('/'); // async
        expect(response.status).toEqual(200);
        
    
    });
    it('200 get route /', async () => {
        const response = await request.get('/'); // async
      
        expect(response.text).toEqual('Hello World');
        
    
    });

    let obj={
        username:'deep1',
        password:'pass123'
    }

    it('Create a record using POST signup ', async () => {
       
        const response = await request.post('/signup').send(obj); // async
        expect(response.status).toEqual(500);
      
    
    });

    it('Create a record using POST signin ', async () => {
       
        const response = await request.post('/signin').set('Authorization', `Basic ZGVlcDE6ZGVlcDEyMw==`); // async
        expect(response.status).toEqual(200);
    expect(response.body.username).toBe('deep1');
      
    
    });


    
})