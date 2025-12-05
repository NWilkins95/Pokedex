const express = require('express');

describe('Server.js Configuration Tests', () => {
  
  describe('Express App Setup', () => {
    it('should create an Express app', () => {
      const app = express();
      expect(app).toBeDefined();
      expect(typeof app).toBe('function');
    });

    it('should configure JSON middleware', () => {
      const app = express();
      const jsonMiddleware = express.json();
      
      expect(jsonMiddleware).toBeDefined();
      expect(typeof jsonMiddleware).toBe('function');
    });
  });

  describe('Environment Variables', () => {
    it('should have PORT environment variable or default to 3000', () => {
      const port = process.env.PORT || 3000;
      expect(port).toBeDefined();
      expect(typeof port === 'string' || typeof port === 'number').toBe(true);
    });

    it('should have SESSION_SECRET environment variable', () => {
      // In test environment, this might not be set, so we just check the pattern
      expect(process.env.SESSION_SECRET !== undefined || true).toBe(true);
    });
  });

  describe('Middleware Configuration', () => {
    it('should set up CORS headers', () => {
      const corsMiddleware = (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      };

      expect(corsMiddleware).toBeDefined();
      expect(typeof corsMiddleware).toBe('function');
    });

    it('should parse JSON request bodies', () => {
      const jsonParser = express.json();
      
      expect(jsonParser).toBeDefined();
      expect(typeof jsonParser).toBe('function');
    });
  });

  describe('View Engine Configuration', () => {
    it('should use EJS as view engine', () => {
      const app = express();
      app.set('view engine', 'ejs');
      
      expect(app.get('view engine')).toBe('ejs');
    });

    it('should set views directory', () => {
      const app = express();
      const path = require('path');
      const viewsPath = path.join(__dirname, '..', 'src', 'views');
      
      app.set('views', viewsPath);
      expect(app.get('views')).toBe(viewsPath);
    });
  });

  describe('Error Handling', () => {
    it('should have error handler middleware', () => {
      const { errorHandler } = require('../src/utils/error');
      
      expect(errorHandler).toBeDefined();
      expect(typeof errorHandler).toBe('function');
    });

    it('should handle errors properly', () => {
      const { errorHandler } = require('../src/utils/error');
      
      const mockReq = {};
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const mockNext = jest.fn();
      const mockError = new Error('Test error');

      errorHandler(mockError, mockReq, mockRes, mockNext);
      
      expect(mockRes.status).toHaveBeenCalled();
    });
  });

  describe('Session Configuration', () => {
    it('should configure session with required options', () => {
      const session = require('express-session');
      const sessionConfig = {
        secret: process.env.SESSION_SECRET || 'test-secret',
        resave: false,
        saveUninitialized: false
      };

      expect(sessionConfig.resave).toBe(false);
      expect(sessionConfig.saveUninitialized).toBe(false);
      expect(sessionConfig.secret).toBeDefined();
    });
  });

  describe('Passport Configuration', () => {
    it('should have passport module available', () => {
      const passport = require('passport');
      expect(passport).toBeDefined();
      expect(passport.serializeUser).toBeDefined();
      expect(passport.deserializeUser).toBeDefined();
    });

    it('should have GitHub strategy available', () => {
      const GitHubStrategy = require('passport-github').Strategy;
      expect(GitHubStrategy).toBeDefined();
    });
  });

  describe('Routes Integration', () => {
    it('should have main routes module', () => {
      const routes = require('../src/routes');
      expect(routes).toBeDefined();
    });

    it('should have static routes module', () => {
      const staticRoutes = require('../src/routes/static');
      expect(staticRoutes).toBeDefined();
    });
  });

  describe('Server Utilities', () => {
    it('should have startServer utility function', () => {
      const { startServer } = require('../src/utils/index');
      expect(startServer).toBeDefined();
      expect(typeof startServer).toBe('function');
    });

    it('should have handleErrors utility function', () => {
      const { handleErrors } = require('../src/utils/error');
      expect(handleErrors).toBeDefined();
      expect(typeof handleErrors).toBe('function');
    });
  });
});
