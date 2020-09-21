const express = require('express');
const cookieRounter = express.Router();
const { User, Session } = require('../models/index');
const moment = require('moment');

const COOKIE_NAME = 'sessionId';

cookieRounter.use((req, res, next) => {
  if (!req.cookies[COOKIE_NAME]) {
    Session.create()
      .then((session) => res.cookie(COOKIE_NAME, session.id))
      .then(() => {
        next();
      })
      .catch((err) => {
        console.log('could not create session cookie');
        res.redirect('/error');
      });
  } else {
    User.findByPk(req.cookies.sessionId)
      .then((user) => {
        if (user) {
          req.loggedIn = true;
          req.user = user;
          next();
        } else {
          req.loggedGuest = true;
          next();
        }
      })
      .catch((e) => {
        console.log(e);
        next();
      });
  }

  cookieRounter.post('/login', (req, res, next) => {
    const { email, password } = req.body;
    const guestSessionId = req.cookies.sessionId;
    User.findOne({
      where: {
        email,
      },
    })
      .then((user) => {
        if (!user) {
          res.status(401).send({ error: 'no user found' });
        } else if (!user.validPassword(password)) {
          res.status(401).send({ error: 'incorrect password' });
        } else {
          res
            .status(200)
            .cookie('sessionId', user.id, {
              path: '*',
              expires: moment.utc().add(1, 'week').toDate(),
            })
            .send({
              success: 'logged in',
              username: user.email,
              isAdmin: user.isAdmin,
            });
        }
      })
      .catch((e) => {
        res.status(500).send({ error: 'error logging in!!' });
        next();
      });
  });

  cookieRounter.post('/logout', (req, res, next) => {
    if (req.loggedIn) {
      req.loggedIn = false;
      req.user = null;
      res.clearCookie('sessionId', { path: '/' });
      res.status(201).send({
        success: 'Logged out',
      });
    } else {
      res.status(401).send({ error: 'error logging out!!' });
    }
  });

  cookieRounter.get(
    ('/verfiyUser',
    (req, res, next) => {
      if (req.loggedIn) {
        res.send(req.user);
      } else if (req.loggedGuest) {
        res.send({ id: 'Guest', firstName: 'Guest', isAdmin: false });
      } else {
        console.log('ERROR neither registered user nor guest');
      }
    })
  );
});

module.exports = cookieRounter;
