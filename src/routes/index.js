const routes = require('express').Router();

routes.use('/', require('./swagger'));
routes.use('/moves', require('./moves'));
routes.use('/users', require('./user'));
routes.use('/pokemons', require('./pokemons'));
routes.use('/battle_teams', require('./battle_team'));

module.exports = routes;