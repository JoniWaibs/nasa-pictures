const axios = require('axios');
require('dotenv').config();

const restClient = axios.create({
  baseURL: process.env.NASA_API_URL,
  params: { api_key: process.env.NASA_API_KEY },
});

restClient.defaults.headers.common['Content-Type'] = 'application/json';

module.exports = restClient;
