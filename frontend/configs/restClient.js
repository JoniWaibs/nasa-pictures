const axios = require('axios');

module.exports = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});
