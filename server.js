var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Question = require('./api/models/mathDailyPuzzleModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mathdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/mathDailyPuzzleRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Math Daily Puzzle RESTful API server started on: ' + port);