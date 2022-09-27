'use strict';

const express = require('express');
const router = express.Router();

const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');

const UserModel = require('../models/user.schema');

router.post('/signin', basicAuth, (req, res) => {
    //TODO When validated, send a json object as a response with the following properties: user : the users' database record

})



module.exports = router;