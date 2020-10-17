const { StatusCodes, getStatusText } = require('http-status-codes');
const { ErrorHandler } = require('../common/error');

/* eslint-disable-next-line no-unused-vars */
const handleNonExistentRoutes = (req, res, next) => {
  const { NOT_FOUND } = StatusCodes;
  throw new ErrorHandler(NOT_FOUND, getStatusText(NOT_FOUND));
};

module.exports = handleNonExistentRoutes;
