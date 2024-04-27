require('dotenv').config()

const express = require('express')
const db = require('./db');
const app = express()
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})