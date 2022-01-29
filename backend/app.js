const express = require('express');
const cors = require('cors');
const compression = require('compression');
require('dotenv').config();

const app = express();
app.use(compression());
app.use(cors());

const router = require('./router');

app.use('/api/', router);

module.exports = app;
