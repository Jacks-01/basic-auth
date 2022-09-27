'use strict';


const { start } = require('./src/server');
const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./src/models/user.schema');
const sequelize = new Sequelize(DATABASE_URL);

const DATABASE_URL =
  process.env.NODE_ENV === 'test'
    ? 'sqlite:memory'
    : process.env.DATABASE_URL;


const UserModel = userSchema(sequelize, DataTypes);

sequelize.sync()
  .then(() => {
    console.log(`Successful Connection`);
  }).catch(e => {
    console.error('Could not start server', e.message);
  });

start();

module.exports = { sequelize, UserModel };