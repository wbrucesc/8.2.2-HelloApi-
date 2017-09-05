const app = require('../../index');
const request = require('supertest');

describe('GET /api/persons', function(){
  test('should return successfully', function(){

    return request(app)
      .get('/api/persons')
      .then(function(response){
        expect(response.statusCode).toBe(200);
      });

  });
});
