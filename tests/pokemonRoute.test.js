const express = require('express');
const request = require('supertest');
const mongoose = require('mongoose');
const pokemonsRouter = require('../src/routes/pokemons');
const Pokemon = require('../src/models/Pokemon');
const app = express();
app.use(express.json());
app.use('/pokemons', pokemonsRouter);

describe('Pokemons Router', () => {
  let testPokemonId;
  let testCounter = 0;

  beforeAll(async () => {
    // Connect using jest-mongodb URI
    const uri = process.env.MONGO_URL || global.__MONGO_URI__;
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // Clear all test data at the start
    await Pokemon.deleteMany({ isTestData: true });
  });

  afterAll(async () => {
    // Clean up all test data
    await Pokemon.deleteMany({ isTestData: true });
    await mongoose.disconnect();
  });

  beforeEach(async () => {
    // Create test Pokemon with pokedex number
    testCounter++;
    const testPokemon = await Pokemon.create({
      pokedex_number: 100 + testCounter, // Use a number for each test
      name: `TestPokemon${testCounter}`,
      type: ['Grass', 'Poison'],
      abilities: ['Overgrow'],
      base_stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        special_attack: 65,
        special_defense: 65,
        speed: 45
      },
      max_stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        special_attack: 65,
        special_defense: 65,
        speed: 45
      },
      isTestData: true // Flagged to identify test data
    });
    testPokemonId = testPokemon._id.toString();
  });

  it('should return 200 and a single pokemon', async () => {
    const response = await request(app).get(`/pokemons/${testPokemonId}`);
    
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body.name).toMatch(/TestPokemon/);
    expect(response.body.pokedex_number).toBeGreaterThanOrEqual(101);
  });

  it('should return 422 for invalid pokemon ID', async () => {
    const response = await request(app).get('/pokemons/invalid123');
    expect(response.status).toBe(422);
  });

  it('should get all pokemons', async () => {
    const response = await request(app).get('/pokemons');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThanOrEqual(1);
  });
});
