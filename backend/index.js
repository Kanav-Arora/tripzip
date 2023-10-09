const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const validateUser = require('./middlewares/userAuthorisation.js')
const config = require('../backend/config')
const connectToMongo = require('./db');

connectToMongo();

const app = express()
const port = config.port;

const corsOptions = {
  origin: config.frontend_origin,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(bodyParser.json())
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(validateUser);

// Available Routes
app.use('/users', require('./routes/users'))


app.get('/', (req, res) => {
  const isAuthenticated = req.isAuth;
  res.json({
    isAuth: isAuthenticated,
    userData: req.isAuth == true ? req.user : null
  });
});

app.listen(port, () => {
  console.log(`Travel Buddy backend listening at http://localhost:${port}`)
})
