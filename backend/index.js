const app = require('./app');
require('dotenv').config();
const { logger } = require('./utils');

const { PORT } = process.env;
// eslint-disable-next-line no-console
app.listen(PORT, () => logger.info(`Southern challenge - api listening on http://localhost:${PORT}`));
