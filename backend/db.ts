require('dotenv').config()
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_DATABASE
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};