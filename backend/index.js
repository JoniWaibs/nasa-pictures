const app = require('./app');
require('dotenv').config();

const { PORT } = process.env;
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Southern challenge - api listening on http://localhost:${PORT}`));
