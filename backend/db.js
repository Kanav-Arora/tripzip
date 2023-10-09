const mongoose = require('mongoose');
require('dotenv').config();
const logger = require('./utils/logger/logger');

const mongoURI = process.env.MONGODB_URI;

async function connectToMongo() {
  await mongoose.connect(mongoURI).then(() => logger.info('Connected to Mongo Successfully')).catch((err) => logger.error(err));
}

module.exports = connectToMongo;
