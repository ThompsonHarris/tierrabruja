const userRouter = require('express').Router();
const validateAuth = require('./utils');
const bcrypt = require('bcrypt');
const { User } = require('../models/index');

userRouter.get('/', validateAuth(), (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((e) => {
      res.status(500).send({ error: 'crtical error retrieving users' });
    });
});

userRouter.get('/:id', validateAuth(), (req, res, next) => {
  const { id } = req.params;
  User.findByPk(id)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send({ error: 'crtical error retrieving user' });
    });
});

userRouter.put('/:id', validateAuth(), (req, res, next) => {
  const { id } = req.params;
  const {
    prevPassword,
    newPassword,
    firstname,
    lastname,
    email,
  } = req.body.user;
  if (prevPassword && newPassword) {
    User.findByPk(id)
      .then((user) => {
        if (!user.validPassword(prevPassword)) {
          res.status(401).send({ error: 'incorrect password' });
        } else {
          bcrypt.genSalt(10, function (err, salt) {
            if (err) return next(err);
            bcrypt.hash(newPassword, salt, function (err, hash) {
              if (err) return next(err);
              console.log(hash.length);
              user.update({ firstname, lastname, email, password: hash });
            });
          });
        }
      })
      .then(() =>
        res.status(200).send({ message: 'updated user with new password' })
      )
      .catch((e) =>
        res.status(500).send({ error: 'crtical error creating user' })
      );
  } else {
    console.log(firstname, lastname, email);
    User.update({ firstname, lastname, email }, { where: { id } })
      .then((response) => {
        res.status(200).send({ message: 'updated user' });
      })
      .catch((e) => {
        res.status(500).send({ error: 'crtical error retrieving user' });
      });
  }
});

userRouter.post('/', validateAuth(), (req, res, next) => {
  const { firstname, lastname, email, password, isAdmin } = req.body;
  console.log(req.body);
  User.create({ firstname, lastname, email, password, isAdmin })
    .then((user) => {
      res.status(200).send(user.data);
    })
    .catch((e) => {
      res.status(500).send({ error: 'crtical error creating user' });
    });
});

userRouter.delete('/:id', validateAuth(), (req, res, next) => {
  const { id } = req.params;
  console.log('user', id);
  User.destroy({
    where: {
      id,
    },
  })
    .then(() => res.status(200).send({ message: `${id} succesfully deleted` }))
    .catch((err) => next(err));
});

module.exports = userRouter;
