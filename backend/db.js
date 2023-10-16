const mongoose = require('mongoose');
const config = require('./config');
const logger = require('./utils/logger/logger');

const mongoURI = config.MongodbUri;

let db;

async function connectToMongo() {
  if (!db) {
    try {
      db = await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
      logger.info('Connected to Mongo Successfully');
    } catch (error) {
      logger.error(error);
    }
  }
  return db;
}

module.exports = connectToMongo;
