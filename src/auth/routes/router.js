'use strict';

const express = require('express');
const router = express.Router();
const { Users } = require('../models/user.schema');
const basicAuth = require('../middleware/basic');
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(200).json(record);
  } catch (e) {
    console.error(e);
    res.status(403).send('Error Creating User');
  }
});

router.post('/signin', basicAuth, (req, res, next) => {
  // send back the user if auth is successful
  res.status(200).send(req.user);
});

module.exports = router;