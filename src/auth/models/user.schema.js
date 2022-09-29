'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL =
  process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL);

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { sequelize, DataTypes, User};
