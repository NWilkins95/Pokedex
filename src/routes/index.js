const routes = require('express').Router();

routes.use('/', require('./swagger'));
routes.use('/moves', require('./moveRoutes'));

module.exports = routes;