const mongoose = require('mongoose');
const config = require('./config');
const logger = require('./utils/logger/logger');

const mongoURI = config.MongodbUri;

async function connectToMongo() {
  await mongoose.connect(mongoURI).then(() => logger.info('Connected to Mongo Successfully')).catch((err) => logger.error(err));
}

module.exports = connectToMongo;
