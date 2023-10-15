/* eslint-disable import/no-extraneous-dependencies */
const dotenv = require('dotenv');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger/logger');

dotenv.config({ path: path.join(__dirname, '../', '.env') });
const apiKey = `${process.env.POSTMAN_API}access_key=${process.env.POSTMAN_ACCESS_KEY}`;

axios.get(apiKey)
    .then((response) => {
        const { collection } = response.data;
        const filePath = path.join(__dirname, '../../documentation/postman/postman-collection.json');

        fs.writeFile(filePath, JSON.stringify(collection, null, 2), (err) => {
            if (err) {
                logger.error('Error writing Postman collection to file:', err);
            }
        });
    })
    .catch((error) => {
        logger.error('Error fetching Postman collection:', error);
    });
