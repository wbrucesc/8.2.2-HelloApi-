const models = require('../models');

const ApiController = {
  list: function(req, res){
    models.Person.findAll().then(function(people){
      res.json(people);
    });
  },
  detail: function(req, res){
    const personId = parseInt(req.params.id);         //id put in url in route

    models.Person.findById(personId).then(function(person){
      res.json(person);
    });
  },
  create: function(req, res){
    models.Person.create(req.body).then(function(person){
      res.json(person);
    });
  },
  update: function(req, res){

  },
  delete: function(req, res){

  }
};

module.exports = ApiController;
