const routes = require('express').Router();

routes.use('/', require('./swagger'));
routes.use('/pokemons', require('./pokemons'));
routes.use('/moves', require('./moveRoutes'));
routes.use('/battle_teams', require('./battle_team'));
routes.use('/users', require('./user'));


module.exports = routes;