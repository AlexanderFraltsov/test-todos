const { processErrorLogger } = require('./middlewares/error-logers');
const { PORT } = require('./common/config');
const {
  UNCAUGHT_EXCEPTION,
  UNHANDLED_REJECTION,
} = require('./common/constants').ERRORS;

process
  .on('unhandledRejection', (err) => {
    processErrorLogger(err, UNHANDLED_REJECTION);
  })
  .on('uncaughtException', (err) => {
    const { exit } = process;
    processErrorLogger(err, UNCAUGHT_EXCEPTION, () => exit(1));
  });

const app = require('./app');

app.listen(PORT, () =>
  console.log(`App is running on http://localhist:${PORT}`)
);
