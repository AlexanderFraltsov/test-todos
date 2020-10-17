const express = require('express');
// const swaggerUI = require('swagger-ui-express');
// const path = require('path');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running');
    return;
  }
  next();
});

module.exports = app;
