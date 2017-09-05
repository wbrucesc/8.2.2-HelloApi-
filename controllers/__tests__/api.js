const app = require('../../index');
const request = require('supertest');

describe('GET /api/persons', function(){
  test('should return successfully', function(){

    return request(app)
      .get('/api/persons')
      .then(function(response){
        const people = response.body;
        expect(response.statusCode).toBe(200);
        expect(people.length).toBe(1);
        expect(people[0].name).toBe('dan');
      });

  });
});
