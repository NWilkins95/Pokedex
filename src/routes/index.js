const routes = require('express').Router();

routes.use('/', require('./swagger'));

module.exports = routes;