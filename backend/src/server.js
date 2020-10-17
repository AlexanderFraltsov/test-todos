const simpleLogger = (err, errorType, cb) => {
  console.error(`${errorType}: ${err.code} | ${err.message}`);
  if (cb) {
    cb();
  }
};

const ERROR_TYPES = {
  UNHANDLED_REJECTION: 'Unhandled Rejection',
  UNCAUGHT_EXCEPTION: 'Uncaught Exception',
};

process
  .on('unhandledRejection', (err) => {
    simpleLogger(err, ERROR_TYPES.UNHANDLED_REJECTION);
  })
  .on('uncaughtException', (err) => {
    const { exit } = process;
    simpleLogger(err, ERROR_TYPES.UNCAUGHT_EXCEPTION, () => exit(1));
  });

const { PORT } = require('./common/config');
const app = require('./app');

app.listen(PORT, () =>
  console.log(`App is running on http://localhist:${PORT}`)
);
