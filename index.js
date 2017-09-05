const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');

const app = express();
const router = require('./router');

app.use(bodyParser.json()); //enable app to read info coming in from request body

router(app);

// const data = [
//   "peanut",
//   "joel",
//   "sarah"
// ];
//
// app.get("/", function(req, res){
//   res.json(data);
// });
//
// app.post("/newItem", function(req, res){
//   const myData = req.body.message;
//   data.push(myData);
//   res.json(data);
// });


app.listen(3000);
