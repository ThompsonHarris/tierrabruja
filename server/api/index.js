const express = require('express');
const mailRouter = require('./email.js');
const sessionRouter = require('./session');
const userRouter = require('./user');

const apiRouter = express.Router();

apiRouter.use((req, res, next) => {
  if (!req.user) {
    req.user = {};
    req.user.guest = true;
    req.adminAuth = false;
    req.user.id = req.cookies.sessionId;
  }
  if (!req.user.isAdmin) {
    req.adminAuth = false;
    next();
  } else {
    req.adminAuth = true;
    next();
  }
});

apiRouter.use('/session', sessionRouter);
apiRouter.use('/email', mailRouter);
apiRouter.use('/user', userRouter);

module.exports = apiRouter;
