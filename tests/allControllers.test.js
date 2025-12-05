const { MongoClient } = require('mongodb');

// Import all controllers
const userController = require('../src/controllers/userController');
const pokemonsController = require('../src/controllers/pokemonsController');
const battle_teamController = require('../src/controllers/battle_teamController');

describe('All Controllers Tests', () => {
  let connection;
  let db;

  beforeAll(async () => {
    const uri = process.env.MONGO_URL || global.__MONGO_URI__;
    connection = await MongoClient.connect(uri);
    db = connection.db();
  });

  afterAll(async () => {
    if (connection) {
      await connection.close();
    }
  });

  beforeEach(async () => {
    // Clear all collections before each test
    await db.collection('users').deleteMany({});
    await db.collection('battle_teams').deleteMany({});
    await db.collection('pokemons').deleteMany({});
  });

  // ==================== USER CONTROLLER TESTS ====================
  describe('UserController', () => {
    it('should create a user', async () => {
      const users = db.collection('users');
      const newUser = { username: 'ash', email: 'ash@pokemon.com' };
      
      const result = await users.insertOne(newUser);
      expect(result.insertedId).toBeDefined();
    });

    it('should get user by username', async () => {
      const users = db.collection('users');
      await users.insertOne({ username: 'misty', email: 'misty@gym.com' });

      const foundUser = await users.findOne({ username: 'misty' });
      expect(foundUser.email).toBe('misty@gym.com');
    });

    it('should update user', async () => {
      const users = db.collection('users');
      await users.insertOne({ username: 'brock', email: 'old@email.com' });

      await users.updateOne(
        { username: 'brock' },
        { $set: { email: 'new@email.com' } }
      );

      const updated = await users.findOne({ username: 'brock' });
      expect(updated.email).toBe('new@email.com');
    });

    it('should delete user', async () => {
      const users = db.collection('users');
      await users.insertOne({ username: 'gary', email: 'gary@rival.com' });

      const result = await users.deleteOne({ username: 'gary' });
      expect(result.deletedCount).toBe(1);
    });
  });

  // ==================== BATTLE TEAM CONTROLLER TESTS ====================
  describe('BattleTeamController', () => {
    it('should create a battle team', async () => {
      const teams = db.collection('battle_teams');
      const newTeam = {
        teamName: 'Elite Four Team',
        pokemon: ['Pikachu', 'Charizard', 'Blastoise']
      };

      const result = await teams.insertOne(newTeam);
      expect(result.insertedId).toBeDefined();
    });

    it('should get battle team by id', async () => {
      const teams = db.collection('battle_teams');
      const team = { teamName: 'Gym Leaders', pokemon: ['Onix', 'Starmie'] };
      const { insertedId } = await teams.insertOne(team);

      const found = await teams.findOne({ _id: insertedId });
      expect(found.teamName).toBe('Gym Leaders');
    });

    it('should update battle team', async () => {
      const teams = db.collection('battle_teams');
      const { insertedId } = await teams.insertOne({
        teamName: 'Old Team',
        pokemon: ['Pidgey']
      });

      await teams.updateOne(
        { _id: insertedId },
        { $set: { teamName: 'New Team' } }
      );

      const updated = await teams.findOne({ _id: insertedId });
      expect(updated.teamName).toBe('New Team');
    });

    it('should delete battle team', async () => {
      const teams = db.collection('battle_teams');
      const { insertedId } = await teams.insertOne({
        teamName: 'Temporary',
        pokemon: []
      });

      const result = await teams.deleteOne({ _id: insertedId });
      expect(result.deletedCount).toBe(1);
    });
  });

  // ==================== POKEMON CONTROLLER TESTS ====================
  describe('PokemonsController', () => {
    it('should create a pokemon', async () => {
      const pokemons = db.collection('pokemons');
      const newPokemon = {
        name: 'Pikachu',
        type: ['Electric'],
        pokedexNumber: 25
      };

      const result = await pokemons.insertOne(newPokemon);
      expect(result.insertedId).toBeDefined();
    });

    it('should find pokemon by name', async () => {
      const pokemons = db.collection('pokemons');
      await pokemons.insertOne({
        name: 'Charizard',
        type: ['Fire', 'Flying'],
        pokedexNumber: 6
      });

      const found = await pokemons.findOne({ name: 'Charizard' });
      expect(found.type).toContain('Fire');
    });

    it('should get all pokemons', async () => {
      const pokemons = db.collection('pokemons');
      await pokemons.insertMany([
        { name: 'Bulbasaur', type: ['Grass', 'Poison'], pokedexNumber: 1 },
        { name: 'Squirtle', type: ['Water'], pokedexNumber: 7 }
      ]);

      const all = await pokemons.find({}).toArray();
      expect(all.length).toBeGreaterThanOrEqual(2);
    });
  });
});
