require('dotenv').config();

const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: "Pokedex",
    description: 'An API to manage a Pokedex for the first generation of Pokemon.',
  },
  host: process.env.RENDER_EXTERNAL_URL,
  schemes: ['https'],
  tags: [
    {
      name: 'Pokemon',
      description: 'Endpoints related to Pokémon data'
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
      name: 'Users',
      description: 'Endpoints for user accounts and authentication'
    }
  ]
};

const outputFile = './swagger.json';
const routes = ['./src/routes/index.js'];

swaggerAutogen(outputFile, routes, doc);