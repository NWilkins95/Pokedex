const express = require('express');
const request = require('supertest');
const mongoose = require('mongoose');
const Pokemon = require('../src/models/Pokemon');
const pokemonsController = require('../src/controllers/pokemonsController');

// Mock auth middleware
jest.mock('../src/utils/index', () => ({
  ...jest.requireActual('../src/utils/index'),
  checkLogin: (_req, _res, next) => next(),
}));

const app = express();
app.use(express.json());
app.use('/pokemons', require('../src/routes/pokemons'));

describe('PokemonsController', () => {
    beforeAll(async () => {
        const uri = process.env.MONGO_URL || global.__MONGO_URI__;
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await Pokemon.deleteMany({ isTestData: true });
    });

    afterAll(async () => {
        await Pokemon.deleteMany({ isTestData: true });
        await mongoose.disconnect();
    });

    afterEach(async () => {
        // Clean up after each test to ensure test isolation
        await Pokemon.deleteMany({ isTestData: true });
    });
    it('should create a pokemon', async () => {
        const newPokemon = new Pokemon({
            name: 'Arcanine',
            pokedex_number: 59,
            type: ['Fire'],
            base_stats: {
                hp: 90,
                attack: 110,
                defense: 80,
                special_attack: 80,
                special_defense: 80,
                speed: 95
            },
            max_stats: {
                hp: 90,
                attack: 110,
                defense: 80,
                special_attack: 80,
                special_defense: 80,
                speed: 95
            },
            isTestData: true
        });

        const saved = await newPokemon.save();
        expect(saved._id).toBeDefined();
        expect(saved.name).toBe('Arcanine');
    });

    it('should find pokemon by name', async () => {
        const newPokemon = new Pokemon({
            name: 'Machamp',
            pokedex_number: 68,
            type: ['Fighting'],
            base_stats: {
                hp: 70,
                attack: 130,
                defense: 65,
                special_attack: 65,
                special_defense: 85,
                speed: 55
            },
            max_stats: {
                hp: 70,
                attack: 130,
                defense: 65,
                special_attack: 65,
                special_defense: 85,
                speed: 55
            },
            isTestData: true
        });
        await newPokemon.save();

        const found = await Pokemon.findOne({ name: 'Machamp' });
        expect(found).toBeDefined();
        expect(found.type).toContain('Fighting');
    });

    it('should get all pokemons', async () => {
        const insertedCount = 4;
        await Pokemon.insertMany([
            {
                name: 'Sandslash',
                pokedex_number: 28,
                type: ['Ground'],
                base_stats: { hp: 75, attack: 100, defense: 110, special_attack: 45, special_defense: 55, speed: 65 },
                max_stats: { hp: 75, attack: 100, defense: 110, special_attack: 45, special_defense: 55, speed: 65 },
                isTestData: true
            },
            {
                name: 'Golem',
                pokedex_number: 76,
                type: ['Rock', 'Ground'],
                base_stats: { hp: 80, attack: 120, defense: 130, special_attack: 55, special_defense: 65, speed: 45 },
                max_stats: { hp: 80, attack: 120, defense: 130, special_attack: 55, special_defense: 65, speed: 45 },
                isTestData: true
            },
            {
                name: 'Alakazam',
                pokedex_number: 65,
                type: ['Psychic'],
                base_stats: { hp: 55, attack: 50, defense: 65, special_attack: 135, special_defense: 95, speed: 120 },
                max_stats: { hp: 55, attack: 50, defense: 65, special_attack: 135, special_defense: 95, speed: 120 },
                isTestData: true
            },
            {
                name: 'Cubone',
                pokedex_number: 104,
                type: ['Ground'],
                base_stats: { hp: 50, attack: 75, defense: 95, special_attack: 40, special_defense: 50, speed: 35 },
                max_stats: { hp: 50, attack: 75, defense: 95, special_attack: 40, special_defense: 50, speed: 35 },
                isTestData: true
            }
        ], { ordered: false });

        const allPokemons = await Pokemon.find({ isTestData: true });
        expect(allPokemons.length).toBe(insertedCount);
    });
});


