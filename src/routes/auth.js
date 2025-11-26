const express = require('express');
const passport = require('passport');
const router = express.Router();

// Redirect to GitHub for authentication
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

// GitHub callback
router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/api-docs');
  }
);

// Logout
router.get('/logout', (req, res) => {
  req.logout(() => res.redirect('/'));
});

module.exports = router;