const express = require('express');
const bodyParser = require('body-parser')

const config = require('../backend/config')
const connectToMongo = require('./db');

connectToMongo();

const app = express()
const port = config.port;

app.use(bodyParser.json())

// Available Routes
app.use('/users', require('./routes/users'))


app.get('/', (req, res) => {
  res.send('Hello, I am Travel Buddy. Kanav and Aadi are building me!')
})

app.listen(port, () => {
  console.log(`Travel Buddy backend listening at http://localhost:${port}`)
})
