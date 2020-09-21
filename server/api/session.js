const express = require('express');
const sessionRounter = express.Router();
const { Session } = require('../models/index');

sessionRounter.get('/verify', (req, res, next) => {
  if (req.loggedIn) {
    res.status(200).send({ user: req.user });
  } else if (req.loggedGuest) {
    res.status(200).send({ guest: req.user });
  } else {
    res
      .status(500)
      .send({ error: 'session error, neither guest nor user logged' });
  }
});

module.exports = sessionRounter;
