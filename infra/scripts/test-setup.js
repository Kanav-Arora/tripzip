/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-dynamic-require */
const { mongoose } = require('mongoose');
const path = require('path');

const config = require(path.resolve(__dirname, '../../backend/config'));
const logger = require('../../backend/utils/logger/logger');

// const User = require('../../backend/models/user.mongo');
// const testData = require('../test/test.json');

const mongoURI = config.MongodbUri;

async function clearDatabase() {
  if (config.NodeEnv === 'testing') {
    try {
      await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

      const collections = await mongoose.connection.db.collections();

      const clearPromises = collections.map(async (collection) => {
        await collection.deleteMany({});
      });

      await Promise.all(clearPromises);
      logger.info('Test DB cleared');
      logger.info('Success: Users collection test data');
      await mongoose.connection.close();
    } catch (error) {
      logger.error(error);
    }
  }
}

(async () => {
  await clearDatabase();
})();
