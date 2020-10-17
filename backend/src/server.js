const {
  UNCAUGHT_EXCEPTION,
  UNHANDLED_REJECTION,
} = require('./common/constants').ERRORS;

const simpleLogger = (err, errorType, cb) => {
  console.error(`${errorType}: ${err.code} | ${err.message}`);
  if (cb) {
    cb();
  }
};

process
  .on('unhandledRejection', (err) => {
    simpleLogger(err, UNHANDLED_REJECTION);
  })
  .on('uncaughtException', (err) => {
    const { exit } = process;
    simpleLogger(err, UNCAUGHT_EXCEPTION, () => exit(1));
  });

const { PORT } = require('./common/config');
const app = require('./app');

app.listen(PORT, () =>
  console.log(`App is running on http://localhist:${PORT}`)
);
