const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv');
dotenv.config();

let client;

async function connectToDb() {
  if (client) {
    console.log('DB already initialized!');
    return client.db("zelda"); 
  }

  try {
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    return client.db("zelda");
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    throw err;
  }
}

function getDb() {
  if (!client) {
    throw Error('Database not initialized.');
  }
  return client.db("zelda");
}

module.exports = { connectToDb, getDb };