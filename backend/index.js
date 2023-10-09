const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('./utils/logger/logger');

const validateUser = require('./middlewares/userAuthorisation');
const config = require('./config');
const connectToMongo = require('./db');

connectToMongo();

const app = express();
const { Port } = config;

const corsOptions = {
  origin: config.FrontendOrigin,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(validateUser);

// Available Routes
app.use('/users', require('./routes/users'));

app.get('/', (req, res) => {
  const isAuthenticated = req.isAuth;
  res.json({
    isAuth: isAuthenticated,
    userData: req.isAuth === true ? req.user : null,
  });
});

app.listen(Port, () => {
  logger.info(`Travel Buddy backend listening at http://localhost:${Port}`);
});
