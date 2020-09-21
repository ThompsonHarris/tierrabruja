const express = require('express');
const mailRouter = require('./email.js');
const sessionRouter = require('./session');

const apiRouter = express.Router();

apiRouter.use((req, res, next) => {
  if (!req.user) {
    req.user = {};
    req.user.guest = true;
    req.adminAuth = false;
    req.user.id = req.cookies.sessionId;
  }
  if (!req.user.admin) {
    req.adminAuth = false;
    next();
  } else {
    req.adminAuth = true;
    next();
  }
});

apiRouter.use('/session', sessionRouter);
apiRouter.use('/email', mailRouter);

module.exports = apiRouter;
