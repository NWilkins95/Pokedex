const express = require('express');
const request = require('supertest');
const mongoose = require('mongoose');
const moveRouter = require('../src/routes/move');
const pokemonRouter = require('../src/routes/pokemons');
const BattleTeam = require('../src/models/BattleTeam');

// Mock auth middleware
jest.mock('../src/utils/index', () => ({
  ...jest.requireActual('../src/utils/index'),
  checkLogin: (_req, _res, next) => next(),
}));

const app = express();
app.use(express.json());
app.use('/moves', moveRouter);
app.use('/pokemons', pokemonRouter);

describe('Move Router', () => {
    let testPokemonId;
    let testTeamId;

    beforeAll(async () => {
        const uri = process.env.MONGO_URL || global.__MONGO_URI__;
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // Use valid ObjectIds for testing
        testPokemonId = new mongoose.Types.ObjectId().toString();
        
        // Create a test battle team with a pokemon at index 0
        const testTeam = new BattleTeam({
            name_of_team: 'Test Team',
            pokemon: [
                { pokemon_id: testPokemonId },
                { pokemon_id: testPokemonId },
            ],
            isTestData: true
        });
        const savedTeam = await testTeam.save();
        testTeamId = savedTeam._id.toString();
    });

    afterAll(async () => {
        // Clean up test data
        await BattleTeam.deleteMany({ isTestData: true });
        await mongoose.disconnect();
    });

    describe('GET /moves/pokemon/:pokemonId/moves', () => {
        it('should return 200 and list of moves for valid pokemon ID', async () => {
            const response = await request(app).get(`/moves/pokemon/${testPokemonId}/moves`);

           console.log('Response status:', response.status);
           console.log('Response body:', JSON.stringify(response.body, null, 2));
            
            expect(response.status).toBe(200);
            expect(response.body.success).toBe(true);
            expect(response.body.moves).toBeDefined();
            expect(Array.isArray(response.body.moves)).toBe(true);
        });

        it('should accept level query parameter', async () => {
            const response = await request(app).get(`/moves/pokemon/${testPokemonId}/moves?level=60`);

            expect(response.status).toBe(200);
            expect(response.body.moves).toBeDefined();
        });

        it('should group moves by method when requested', async () => {
            const response = await request(app).get(`/moves/pokemon/${testPokemonId}/moves?groupBy=method`);

            expect(response.status).toBe(200);
            expect(response.body.moves).toBeDefined();
        });
    });

    describe('POST /moves/battle-team/:teamId/pokemon/:pokemonIndex/moves', () => {
        it('should validate and reject invalid move IDs for a pokemon', async () => {
            const response = await request(app)
                .post(`/moves/battle-team/${testTeamId}/pokemon/0/moves`)
                .send({
                    moveIds: [
                        new mongoose.Types.ObjectId().toString(),
                        new mongoose.Types.ObjectId().toString(),
                        new mongoose.Types.ObjectId().toString(),
                        new mongoose.Types.ObjectId().toString()
                    ]
                });

            // The route should reject moves that the pokemon cannot learn
            expect(response.status).toBe(400);
            expect(response.body.success).toBe(false);
            expect(response.body.error).toBeDefined();
        });
    });
});
