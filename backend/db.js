const mongoose = require('mongoose');
const config = require('./config');
const logger = require('./utils/logger/logger');

const mongoURI = config.MongodbUri;

let db;

async function connectToMongo() {
  if (!db) {
    try {
      db = await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
      if (config.NodeEnv === 'testing') {
        logger.info('Connected and Cleared Test DB');
      } else if (config.NodeEnv === 'development') {
        logger.info('Connected with Development DB');
      } else {
        logger.info('Connected to Mongo Successfully');
      }
    } catch (error) {
      logger.error(`${error} [db.js]`);
    }
  }
  return db;
}

async function closeMongoDB() {
  if (db) {
    try {
      await mongoose.connection.close();
      logger.info('MongoDB connection closed successfully');
    } catch (error) {
      logger.error(`${error} [db.js]`);
    } finally {
      db = null;
    }
  }
}

module.exports = { connectToMongo, closeMongoDB };
