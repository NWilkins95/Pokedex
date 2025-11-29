const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

let connected = false;

async function connectToDb() {
  if (connected && mongoose.connection.readyState === 1) {
    console.log('DB already initialized!');
    return mongoose.connection.db;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'Pokedex',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connected = true;
    mongoose.connection.on('error', (err) => console.error('MongoDB connection error:', err));
    console.log('Connected to MongoDB via mongoose');
    return mongoose.connection.db;
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    throw err;
  }
}

function getDb() {
  if (!mongoose.connection || mongoose.connection.readyState !== 1) {
    throw Error('Database not initialized.');
  }
  return mongoose.connection.db;
}

module.exports = { connectToDb, getDb, mongoose };