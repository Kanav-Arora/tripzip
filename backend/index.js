const connectToMongo = require('./db');

const express = require('express');
const { port } = require('../backend/config')

connectToMongo();

const app = express()

app.use(json())

// Available Routes
app.use('/users', require('./routes/users'))


app.get('/', (req, res) => {
  res.send('Hello, I am Travel Buddy. Kanav and Aadi are building me!')
})

app.listen(port, () => {
  console.log(`Travel Buddy backend listening at http://localhost:${port}`)
})
