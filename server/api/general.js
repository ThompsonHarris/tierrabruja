const generalRouter = require('express').Router();
const { Setting } = require('../models/index');
const validateAuth = require('./utils');
const Jimp = require('jimp');
const { Image } = require('../models/index');

generalRouter.put('/image/move', (req, res, next) => {
  const { oldPos, newPos, id } = req.body;
  Image.findOne({ where: { settingId: id, order: oldPos } })
    .then((toMove) => toMove.moveSort(newPos))
    .then(() => {
      return Setting.findByPk(id, {
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

generalRouter.post('/image/upload', async (req, res) => {
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

generalRouter.post('/image', (req, res) => {
  console.log(req.body);
  const {
    type,
    thumbImage,
    thumbImagePath,
    fullImage,
    fullImagePath,
    settingId,
  } = req.body;
  Image.create({
    type,
    thumbImage,
    thumbImagePath,
    fullImage,
    fullImagePath,
    settingId,
  })
    .then((result) => {
      res.status(200).send({
        message: `successful created image assoc with settings`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        error: 'crtical error creating image assoc with setting',
        err,
      });
    });
});

generalRouter.delete('/image/:id', validateAuth(), (req, res, next) => {
  const { id } = req.params;
  console.log('attempting to delete image', id);
  Image.findByPk(id)
    .then((selectedImage) => {
      selectedImage.deleteSort();
    })
    .then(() =>
      res.status(200).send({ message: `successful delete image ${id}` })
    )
    .catch((err) => next(err));
});

generalRouter.get('/', (req, res, next) => {
  Setting.findAll({
    include: [{ model: Image }],
    order: [[Image, 'order', 'ASC']],
  })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ error: 'error retieving general settings data', err });
    });
});

generalRouter.put('/', validateAuth(), (req, res, next) => {
  const {
    sitename,
    sitedescription,
    defaultemail,
    aboutdescription,
  } = req.body;
  Setting.findAll()
    .then((settings) => {
      settings[0].update({
        sitename,
        sitedescription,
        defaultemail,
        aboutdescription,
      });
    })
    .then((response) => {
      res.status(200).send({ message: 'setting successfully updated' });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ error: 'error retieving general settings data', err });
    });
});

module.exports = generalRouter;
