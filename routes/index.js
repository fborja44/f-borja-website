/** index.js - bind all routes together **/
const userRoutes = require('./user');
const path = require('path');

// Put all the routes together
const constructorMethod = (app) => {
  app.use('/', userRoutes);

  // Catch all method
  app.use('*', (req, res) => {
      res.status(404).json({ status: 404, error: 'Route not found.'});
  });
};

module.exports = constructorMethod;