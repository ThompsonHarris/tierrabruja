const express = require('express');
const mailRouter = require('./email');
const sessionRouter = require('./session');
const userRouter = require('./user');
const projectRouter = require('./projects');
const generalRouter = require('./general');

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
apiRouter.use('/project', projectRouter);
apiRouter.use('/settings', generalRouter);

module.exports = apiRouter;
