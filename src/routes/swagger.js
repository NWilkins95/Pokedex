const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const { handleErrors } = require('../utils/error');
const loginController = require('../controllers/loginController');

// Redirect root to login
router.get('/', (req, res) => {
  res.redirect('/login');
});

router.get('/login', handleErrors(loginController.buildLogin));

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;