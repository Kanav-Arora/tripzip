const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

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
app.use(cors(corsOptions))

// Available Routes
app.use('/users', require('./routes/users'))


app.get('/', (req, res) => {
  res.send('Hello, I am Travel Buddy. Kanav and Aadi are building me!')
})

app.listen(port, () => {
  console.log(`Travel Buddy backend listening at http://localhost:${port}`)
})
