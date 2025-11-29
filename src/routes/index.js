const routes = require('express').Router();

routes.use('/', require('./swagger'));
routes.use('/pokemons', require('./pokemons'));
routes.use('/moves', require('./moveRoutes'));
routes.use('/battle_teams', require('./battle_team'));
routes.use('/auth', require('./auth'));
routes.use('/custom_pokemons', require('./customPokemon'));
routes.use('/battle_history', require('./battleHistory'));
routes.use('/training_guides', require('./trainingGuide'));


module.exports = routes;