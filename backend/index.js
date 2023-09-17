const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 5000

app.use(express.json())

// Available Routes
app.use('/api/users', require('./routes/users'))


app.get('/', (req, res) => {
  res.send('Hello, I am Travel Buddy. Kanav and Aadi are building me!')
})

app.listen(port, () => {
  console.log(`Travel Buddy backend listening at http://localhost:${port}`)
})
