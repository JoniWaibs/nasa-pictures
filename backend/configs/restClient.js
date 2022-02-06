const axios = require('axios');
require('dotenv').config();

module.exports = axios.create({
  baseURL: process.env.NASA_API_URL,
  params: { api_key: process.env.NASA_API_KEY },
});
