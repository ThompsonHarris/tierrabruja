const projectRouter = require('express').Router();
const validateAuth = require('./utils');
const bcrypt = require('bcrypt');
const Jimp = require('jimp');
const { Project, Image } = require('../models/index');

projectRouter.put('/image/move', (req, res, next) => {
  const { oldPos, newPos, id } = req.body;
  Image.findOne({ where: { projectId: id, order: oldPos } })
    .then((toMove) => toMove.moveSort(newPos))
    .then(() => {
      return Project.findByPk(id, {
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

projectRouter.post('/image/upload', async (req, res) => {
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

projectRouter.post('/image', (req, res) => {
  const {
    type,
    thumbImage,
    thumbImagePath,
    fullImage,
    fullImagePath,
    projectId,
  } = req.body;
  Image.create({
    type,
    thumbImage,
    thumbImagePath,
    fullImage,
    fullImagePath,
    projectId,
  })
    .then((result) => {
      res.status(200).send({
        message: `successful created image assoc with user ${projectId}`,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ error: 'crtical error creating image assoc with user', err });
    });
});

projectRouter.delete('/image/:id', validateAuth(), (req, res, next) => {
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

projectRouter.get('/', validateAuth(), (req, res, next) => {
  Project.findAll({
    include: [{ model: Image }],
    order: [[Image, 'order', 'ASC']],
  })
    .then((projects) => {
      res.status(200).send(projects);
    })
    .catch((e) => {
      res.status(500).send({ error: 'crtical error retrieving projects' });
    });
});

projectRouter.get('/:id', validateAuth(), (req, res, next) => {
  const { id } = req.params;
  Project.findByPk(id, {
    include: [{ model: Image }],
    order: [[Image, 'order', 'ASC']],
  })
    .then((project) => {
      res.status(200).send(project);
    })
    .catch((e) => {
      res.status(500).send({ error: 'crtical error retrieving project' });
    });
});

projectRouter.put('/:id', validateAuth(), (req, res, next) => {
  const { id } = req.params;
  const { title, description, address, state, city, status } = req.body.project;
  Project.update(
    { title, description, address, state, city, status },
    { where: { id } }
  )
    .then((response) => {
      res.status(200).send({ message: 'updated project' });
    })
    .catch((e) => {
      res.status(500).send({ error: 'crtical error retrieving project' });
    });
});

projectRouter.post('/', validateAuth(), (req, res, next) => {
  const { title, address, state, city, status } = req.body;
  Project.create({ title, address, state, city, status })
    .then((project) => {
      res.status(200).send(project.data);
    })
    .catch((e) => {
      res.status(500).send({ error: 'crtical error creating project' });
    });
});

projectRouter.delete('/:id', validateAuth(), (req, res, next) => {
  const { id } = req.params;
  Project.findByPk(id, {
    include: [{ model: Image }],
    order: [[Image, 'order', 'ASC']],
  })
    .then((project) => project.DeleteAll())
    .then((message) =>
      res.status(200).send({ message: `${id} ${message} deleted` })
    )
    .catch((err) => next(err));
});

module.exports = projectRouter;
