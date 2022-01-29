const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const router = require('./router');

const { PORT } = process.env;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Southern challenge - api listening on http://localhost:${PORT}`));

app.use(cors());
app.use('/api/', router);
