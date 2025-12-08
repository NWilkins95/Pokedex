const express = require('express');
const request = require('supertest');
const mongoose = require('mongoose');
const battle_teamRouter = require('../src/routes/battle_team');
const BattleTeam = require('../src/models/BattleTeam');
const app = express();
app.use(express.json());
app.use('/battle-teams', battle_teamRouter);

describe('Battle Team Controller', () => {
    let db;
    let testCounter = 0;

    beforeAll(async () => {
        const uri = process.env.MONGO_URL || global.__MONGO_URI__;
        await mongoose.connect(uri, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        db = mongoose.connection;
        // Clear test data at start
        await BattleTeam.deleteMany({ isTestData: true });
    });

    afterAll(async () => {
        // Clean up test data
        await BattleTeam.deleteMany({ isTestData: true });
        await mongoose.disconnect();
    });

    beforeEach(async () => {
        // Doesn't delete all data, just reset for this test
        testCounter++;
    });

    it('should create a battle team', async () => {
        testCounter++;
        const newTeam = new BattleTeam({
            name_of_team: `Elite Four Lance ${testCounter}`,
            pokemon: [],
            isTestData: true
        });

        const result = await newTeam.save();
        expect(result._id).toBeDefined();
        expect(result.name_of_team).toContain('Elite Four Lance');
    });

    it('should get battle team by id', async () => {
        testCounter++;
        const team = new BattleTeam({
            name_of_team: `Gym leader Brock ${testCounter}`, 
            pokemon: [],
            isTestData: true
        });
        const saved = await team.save();

        const found = await BattleTeam.findById(saved._id);
        expect(found.name_of_team).toContain('Gym leader Brock');
    });

    it('should update battle team', async () => {
        testCounter++;
        const team = new BattleTeam({
            name_of_team: 'Old Team',
            pokemon: [],
            isTestData: true
        });
        const saved = await team.save();

        await BattleTeam.updateOne(
            { _id: saved._id },
            { $set: { name_of_team: 'New Team' } }
        );

        const updated = await BattleTeam.findById(saved._id);
        expect(updated.name_of_team).toBe('New Team');
    });

    it('should delete battle team', async () => {
        testCounter++;
        const team = new BattleTeam({
            name_of_team: 'Temporary',
            pokemon: [],
            isTestData: true
        });
        const saved = await team.save();

        const result = await BattleTeam.deleteOne({ _id: saved._id });
        expect(result.deletedCount).toBe(1);
    });
});
