const { connectToDb } = require('../db/connect');

// Function to start the server after connecting to the database
async function startServer(app, port) {
  try {
    await connectToDb();
    app.listen(port, () => {
      console.log(`Connected to database and server listening on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1); // Kill the server if DB connection fails
  }
}

function checkLogin(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' }); 
}

module.exports = { startServer, checkLogin };