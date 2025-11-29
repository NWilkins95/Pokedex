const { name } = require('ejs');

require('dotenv').config();

const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: "Pokedex",
    description: 'An API to manage a Pokedex for the first generation of Pokemon. \n\n**Authentication Notice:**\n\nAll `POST`, `PUT`, and `DELETE` routes require authorization (indicated by the lock icon), in addition to the `GET` route to retrive a specific battle team. If you are not authenticated, [sign in via GitHub](https://pokedex-g9kr.onrender.com/login), after which you will be redirected back to the API documentation. Failure to do so will result in the API returning a `401 Unauthorized` as a response.\n\nTo end your session, [logout here](https://pokedex-g9kr.onrender.com/auth/logout).\n\nAll routes are wrapped in centralized error handling. POST and PUT routes include validation logic and may return `422 Unprocessable Entity` if input is invalid.\n\n_Not affiliated with Nintendo._',
  },
  host: process.env.RENDER_EXTERNAL_URL,
  schemes: ['https'],
  tags: [
    {
      name: 'Pokemon',
      description: 'Endpoints related to Pokémon data'
    },
    {
      name: 'Custom Pokemons',
      description: 'Endpoints for managing custom Pokémon'
    },
    {
      name: 'Moves',
      description: 'Endpoints related to Pokémon moves'
    },
    {
      name: 'Battle Teams',
      description: 'Endpoints for managing battle teams'
    },
    {
      name: 'Battle History',
      description: 'Endpoints for managing battle history'
    },
    {
      name: 'Training Guides',
      description: 'Endpoints for managing training guides' 
    }
  ]
};

const outputFile = './swagger.json';
const routes = ['./src/routes/index.js'];

swaggerAutogen(outputFile, routes, doc);