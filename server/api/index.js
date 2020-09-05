const express = require('express');
const mailRouter = require('./email.js');

const apiRouter = express.Router();

apiRouter.use('/email', mailRouter);

module.exports = apiRouter;
