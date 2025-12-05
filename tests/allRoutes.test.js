const express = require('express');
const request = require('supertest');

// Import all route files
const userRouter = require('../src/routes/user');
const pokemonsRouter = require('../src/routes/pokemons');
const battle_teamRouter = require('../src/routes/battle_team');
const moveRouter = require('../src/routes/moveRoutes');

// Mock all controllers
jest.mock('../src/controllers/userController', () => ({
  getUserByUsername: jest.fn((req, res) => {
    res.status(200).json({ username: 'ash', email: 'ash@test.com' });
  }),
  createUser: jest.fn((req, res) => {
    res.status(201).json({ message: 'User created' });
  }),
  updateUserByUsername: jest.fn((req, res) => {
    res.status(200).json({ message: 'User updated' });
  }),
  deleteUserByUsername: jest.fn((req, res) => {
    res.status(200).json({ message: 'User deleted' });
  })
}));

jest.mock('../src/controllers/pokemonsController', () => ({
  getAllPokemons: jest.fn((req, res) => {
    res.status(200).json([
      { id: 1, name: 'Bulbasaur' },
      { id: 25, name: 'Pikachu' }
    ]);
  }),
  getPokemonById: jest.fn((req, res) => {
    res.status(200).json({ id: 25, name: 'Pikachu', type: ['Electric'] });
  })
}));

jest.mock('../src/controllers/battle_teamController', () => ({
  getBattleTeamById: jest.fn((req, res) => {
    res.status(200).json({ teamName: 'Elite Four', pokemon: ['Pikachu'] });
  }),
  createBattleTeam: jest.fn((req, res) => {
    res.status(201).json({ message: 'Battle team created' });
  }),
  updateBattleTeamById: jest.fn((req, res) => {
    res.status(200).json({ message: 'Battle team updated' });
  }),
  deleteBattleTeamById: jest.fn((req, res) => {
    res.status(200).json({ message: 'Battle team deleted' });
  })
}));

jest.mock('../src/utils/moveValidator', () => ({
  getLearnableMoves: jest.fn(() => Promise.resolve([
    {
      move_id: { _id: '1', name: 'Thunderbolt', type: 'Electric', category: 'Special', power: 90, accuracy: 100, pp: 15 },
      learn_method: 'level-up',
      level_learned: 26
    }
  ])),
  validateMoves: jest.fn(() => Promise.resolve({ valid: true })),
  getMovesGroupedByMethod: jest.fn(() => Promise.resolve({
    'level-up': [{ move_name: 'Thunderbolt' }],
    'tm': [{ move_name: 'Thunder' }]
  }))
}));

jest.mock('../src/models/BattleTeam', () => ({
  findById: jest.fn(() => Promise.resolve({
    _id: '123',
    pokemon: [{ pokemon_id: '25', level: 50 }],
    moves_chosen: [],
    save: jest.fn(() => Promise.resolve())
  }))
}));

// Mock utilities
jest.mock('../src/utils/error', () => ({
  handleErrors: jest.fn((fn) => fn)
}));

jest.mock('../src/utils/index', () => ({
  checkLogin: jest.fn((req, res, next) => {
    next(); // Just pass through for testing
  })
}));

describe('All Routes Tests', () => {
  let app;

  beforeAll(() => {
    // Create a minimal Express app with all routes
    app = express();
    app.use(express.json());
    app.use('/user', userRouter);
    app.use('/pokemons', pokemonsRouter);
    app.use('/battle_team', battle_teamRouter);
    app.use('/moves', moveRouter);
  });

  // ==================== USER ROUTES ====================
  describe('User Routes', () => {
    describe('GET /user/:username', () => {
      it('should return 200 and user data', async () => {
        const response = await request(app).get('/user/ash');
        
        expect(response.status).toBe(200);
        expect(response.body.username).toBe('ash');
      });
    });

    describe('POST /user', () => {
      it('should return 201 when creating a user', async () => {
        const response = await request(app)
          .post('/user')
          .send({ username: 'misty', email: 'misty@gym.com' });
        
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('User created');
      });
    });

    describe('PUT /user/:username', () => {
      it('should return 200 when updating a user', async () => {
        const response = await request(app)
          .put('/user/ash')
          .send({ email: 'new@email.com' });
        
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('User updated');
      });
    });

    describe('DELETE /user/:username', () => {
      it('should return 200 when deleting a user', async () => {
        const response = await request(app).delete('/user/ash');
        
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('User deleted');
      });
    });
  });

  // ==================== POKEMON ROUTES ====================
  describe('Pokemon Routes', () => {
    describe('GET /pokemons', () => {
      it('should return 200 and list of all pokemons', async () => {
        const response = await request(app).get('/pokemons');
        
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
      });
    });

    describe('GET /pokemons/:id', () => {
      it('should return 200 and pokemon data', async () => {
        const response = await request(app).get('/pokemons/25');
        
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('Pikachu');
        expect(response.body.type).toContain('Electric');
      });
    });
  });

  // ==================== BATTLE TEAM ROUTES ====================
  describe('Battle Team Routes', () => {
    describe('GET /battle_team/:id', () => {
      it('should return 200 and battle team data', async () => {
        const response = await request(app).get('/battle_team/123');
        
        expect(response.status).toBe(200);
        expect(response.body.teamName).toBe('Elite Four');
      });

      it('should require authentication', async () => {
        const { checkLogin } = require('../src/utils/index');
        
        await request(app).get('/battle_team/123');
        
        expect(checkLogin).toHaveBeenCalled();
      });
    });

    describe('POST /battle_team', () => {
      it('should return 201 when creating a battle team', async () => {
        const response = await request(app)
          .post('/battle_team')
          .send({ teamName: 'My Team', pokemon: ['Charizard'] });
        
        expect(response.status).toBe(201);
        expect(response.body.message).toBe('Battle team created');
      });
    });

    describe('PUT /battle_team/:id', () => {
      it('should return 200 when updating a battle team', async () => {
        const response = await request(app)
          .put('/battle_team/123')
          .send({ teamName: 'Updated Team' });
        
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Battle team updated');
      });
    });

    describe('DELETE /battle_team/:id', () => {
      it('should return 200 when deleting a battle team', async () => {
        const response = await request(app).delete('/battle_team/123');
        
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Battle team deleted');
      });
    });
  });

  // ==================== MOVE ROUTES ====================
  describe('Move Routes', () => {
    describe('GET /moves/pokemon/:pokemonId/moves', () => {
      it('should return 200 and list of learnable moves', async () => {
        const response = await request(app).get('/moves/pokemon/25/moves');
        
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.moves).toBeDefined();
        expect(Array.isArray(response.body.moves)).toBe(true);
      });

      it('should accept level query parameter', async () => {
        const response = await request(app).get('/moves/pokemon/25/moves?level=50');
        
        expect(response.status).toBe(200);
        expect(response.body.level).toBe(50);
      });

      it('should group moves by method when requested', async () => {
        const response = await request(app).get('/moves/pokemon/25/moves?groupBy=method');
        
        expect(response.status).toBe(200);
        expect(response.body.moves).toBeDefined();
      });
    });

    describe('POST /moves/battle-team/:teamId/pokemon/:pokemonIndex/moves', () => {
      it('should return 200 when setting valid moves', async () => {
        const response = await request(app)
          .post('/moves/battle-team/123/pokemon/0/moves')
          .send({ moveIds: ['1', '2', '3', '4'] });
        
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
      });
    });
  });

  // ==================== ROUTE PROTECTION ====================
  describe('Authentication Middleware', () => {
    it('should call checkLogin for protected user routes', async () => {
      const { checkLogin } = require('../src/utils/index');
      checkLogin.mockClear(); // Clear previous calls
      
      await request(app).post('/user').send({});
      
      expect(checkLogin).toHaveBeenCalled();
    });

    it('should call checkLogin for all battle_team routes', async () => {
      const { checkLogin } = require('../src/utils/index');
      checkLogin.mockClear();
      
      await request(app).get('/battle_team/123');
      
      expect(checkLogin).toHaveBeenCalled();
    });
  });
});
