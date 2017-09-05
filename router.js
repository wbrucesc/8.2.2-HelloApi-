const express = require('express');
const ApiController = require('./controllers/api');

module.exports = function(app){
  const apiRouter = express.Router();


  apiRouter.get('/persons', ApiController.list);          //shows list of people
  apiRouter.get('/persons/:id', ApiController.detail);    //shows a particular person
  apiRouter.post('/persons', ApiController.create);       //adds a new person
  apiRouter.patch('/persons/:id', ApiController.update);  //updates a particular person
  apiRouter.delete('persons/:id', ApiController.delete);  //deletes a person


  app.use('/api', apiRouter);
};
