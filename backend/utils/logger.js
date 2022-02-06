const { createLogger, format, transports, addColors } = require('winston');

const { combine, timestamp, simple, colorize, printf, label } = format;

const logLevels = {
  levels: {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5,
  },
};

const myFormat = printf(({ level, message, label, timestamp }) => `${timestamp} [${label}] ${level}: ${message}`);

module.exports = createLogger({
  levels: logLevels.levels,
  format: combine(
    timestamp(),
    simple(),
    colorize(),
    label({ label: 'Server' }),
    myFormat
  ),
  transports: [
    new transports.File({
      maxFiles: 5,
      maxsize: 5120000,
      filename: `${__dirname}/../api-log.log`
    }),
    new transports.Console()
  ],
});
