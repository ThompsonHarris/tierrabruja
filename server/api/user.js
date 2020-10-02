const userRouter = require('express').Router();
const validateAuth = require('./utils');
const bcrypt = require('bcrypt');
const Jimp = require('jimp');
const { User, Image } = require('../models/index');

userRouter.put('/image/move', (req, res, next) => {
  const { oldPos, newPos, id } = req.body;
  Image.findOne({ where: { userId: id, order: oldPos } })
    .then((toMove) => toMove.moveSort(newPos))
    .then(() => {
      return User.findByPk(id, {
        include: [{ model: Image }],
        order: [[Image, 'order', 'ASC']],
      });
    })
    .then((response) => {
      res.status(200).send({
        message: `successful rearranged image to new position`,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ error: 'crtical error moving image to new position' });
    });
});

userRouter.post('/image/upload', async (req, res) => {
  if (!req.files) {
    return res.status(500).send({ error: 'files not found' });
  }
  const myFile = req.files.file;
  const thumb = await Jimp.read(myFile.data).then((image) => {
    return new Promise((resolve, reject) => {
      image
        .resize(250, Jimp.AUTO) // resize
        .quality(60)
        .getBuffer(Jimp.MIME_JPEG, (err, filebuffer) => {
          if (err) {
            reject(err);
          } else {
            resolve({ buffer: filebuffer, name: myFile.name });
          }
        });
    });
  });
  const full = await Jimp.read(myFile.data).then((image) => {
    return new Promise((resolve, reject) => {
      return image
        .resize(1500, Jimp.AUTO) // resize
        .quality(100)
        .getBuffer(Jimp.MIME_JPEG, (err, filebuffer) => {
          if (err) {
            reject(err);
          } else {
            resolve({ buffer: filebuffer, name: myFile.name });
          }
        });
    });
  });
  return res.send({ thumb, full });
});

userRouter.post('/image', (req, res) => {
  const {
    type,
    thumbImage,
    thumbImagePath,
    fullImage,
    fullImagePath,
    userId,
  } = req.body;
  Image.create({
    type,
    thumbImage,
    thumbImagePath,
    fullImage,
    fullImagePath,
    userId,
  })
    .then((result) => {
      res.status(200).send({
        message: `successful created image assoc with user ${userId}`,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ error: 'crtical error creating image assoc with user', err });
    });
});

userRouter.delete('/image/:id', validateAuth(), (req, res, next) => {
  const { id } = req.params;
  console.log('attempting to image', id);
  Image.findByPk(id)
    .then((selectedImage) => {
      selectedImage.deleteSort();
    })
    .then(() =>
      res.status(200).send({ message: `successful delete image ${id}` })
    )
    .catch((err) => next(err));
});

userRouter.get('/', validateAuth(), (req, res, next) => {
  User.findAll({
    include: [{ model: Image }],
    order: [[Image, 'order', 'ASC']],
  })
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((e) => {
      res.status(500).send({ error: 'crtical error retrieving users' });
    });
});

userRouter.get('/:id', validateAuth(), (req, res, next) => {
  const { id } = req.params;
  User.findByPk(id, {
    include: [{ model: Image }],
    order: [[Image, 'order', 'ASC']],
  })
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
  User.destroy({
    where: {
      id,
    },
  })
    .then(() => res.status(200).send({ message: `${id} succesfully deleted` }))
    .catch((err) => next(err));
});

module.exports = userRouter;
