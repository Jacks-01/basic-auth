'use strict';

const { start } = require('./src/server');
const { sequelize } = require('./src/auth/models/user.schema');


sequelize
  .sync()
  .then(() => {
    console.log(`Successful Connection`);
  })
  .catch((e) => {
    console.error('Could not start server', e.message);
  });

start();

