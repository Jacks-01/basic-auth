'use strict';

const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();

//TODO import middleware
const logger = require('./middleware/logger');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);

//TODO import routers
const authRoute = require('./auth/routes/router');
app.use(authRoute);

// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup username=john password=foo

//* export to index
function start() {
  app.listen(PORT, () => console.log(`server up on port ${PORT}`));
}

module.exports = { app, start };
