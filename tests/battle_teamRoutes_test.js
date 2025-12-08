const express = require('express');
const request = require('supertest');
const mongoose = require('mongoose');

// Mock auth middleware
jest.mock('../src/utils/index', () => ({
  ...jest.requireActual('../src/utils/index'),
  checkLogin: (_req, _res, next) => next(),
}));

const battle_teamRouter = require('../src/routes/battle_team');
const BattleTeam = require('../src/models/BattleTeam');

const app = express();
app.use(express.json());
app.use('/battle-team', battle_teamRouter);

describe('Battle Team Router', () => {
    let testBattleTeamId;
    let testCounter = 0;

    beforeAll(async () => {
        const uri = process.env.MONGO_URL || global.__MONGO_URI__;
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // Clear all test data at the start
        await BattleTeam.deleteMany({ isTestData: true });
    });

    afterAll(async () => {
        // Clean up all test data
        await BattleTeam.deleteMany({ isTestData: true });
        await mongoose.disconnect();
    });

    beforeEach(async () => {
        // Create test Battle Team
        testCounter++;
        const testTeam = new BattleTeam({
            name_of_team: `Elite Four Bruno ${testCounter}`,
            pokemon: [],
            isTestData: true
        });
        const savedTeam = await testTeam.save();
        testBattleTeamId = savedTeam._id;
    });

    afterEach(async () => {
        // Remove test Battle Team after each test
        await BattleTeam.deleteMany({ isTestData: true });
    }); 

    describe('GET /battle-team/:id', () => {
        it('should return 200 and battle team data for valid id', async () => {
            const response = await request(app).get(`/battle-team/${testBattleTeamId}`);

            expect(response.status).toBe(200);
            expect(response.body.name_of_team).toContain('Elite Four Bruno');
        });
    });

    describe('POST /battle-team', () => {
        it('should return 201 when creating a battle team', async () => {
            const response = await request(app)
                .post('/battle-team')
                .send({
                    name_of_team: 'Champions',
                    custom_pokemon_ids: [
                        new mongoose.Types.ObjectId().toString(),
                        new mongoose.Types.ObjectId().toString()
                    ]
                });
            
            expect(response.status).toBe(201);
            expect(response.body.message).toBe('Battle team created successfully.');
            expect(response.body.id).toBeDefined();
        });
    });

    describe('PUT /battle-team/:id', () => {
        it('should return 200 when updating a battle team', async () => {
            const response = await request(app)
                .put(`/battle-team/${testBattleTeamId}`)
                .send({
                    name_of_team: 'New Champions',
                    custom_pokemon_ids: [
                        new mongoose.Types.ObjectId().toString()
                    ]
                });

            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Battle team updated successfully.');
        });
    });

    describe('DELETE /battle-team/:id', () => {
        it('should return 200 when deleting a battle team', async () => {
            const response = await request(app).delete(`/battle-team/${testBattleTeamId}`);

            expect(response.status).toBe(200);
            expect(response.body.message).toBe('Battle team deleted successfully.');
        });
    });
});
