const mongoose = require('mongoose');
const config = require('./config');
const logger = require('./utils/logger/logger');

const mongoURI = config.MongodbUri;

let db;

// async function clearDatabase() {
//   const { collections } = mongoose.connection;

//   const clearPromises = Object.values(collections).map(async (collection) => {
//     await collection.deleteMany({});
//   });

//   await Promise.all(clearPromises);
// }

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

module.exports = connectToMongo;
