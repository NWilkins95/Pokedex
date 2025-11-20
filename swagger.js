require('dotenv').config();

const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: "Pokedex",
    description: '',
  },
  host: process.env.RENDER_EXTERNAL_URL,
  schemes: ['https']
};

const outputFile = './swagger.json';
const routes = ['./src/routes/moveRoutes.js'];

swaggerAutogen(outputFile, routes, doc);