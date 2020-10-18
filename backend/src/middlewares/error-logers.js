const { handleError } = require('../common/error');

/* eslint-disable-next-line no-unused-vars */
const errorLoger = (err, req, res, next) => {
  const { statusCode, message } = handleError(err, res);
  console.error(`${statusCode} | ${message}`);
};

const processErrorLogger = (err, errorType, cb) => {
  console.error(`${errorType}: ${err.code} | ${err.message}`);
  if (cb) {
    cb();
  }
};

module.exports = { errorLoger, processErrorLogger };
