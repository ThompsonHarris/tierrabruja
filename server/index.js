const express = require('express');
const apiRouter = require('./api/index');
const path = require('path');
const bodyParser = require('body-parser');
const { db } = require('./models/index');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cookieParser());

app.use(fileUpload());

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use(express.static(path.join(__dirname, '../dist')));

app.use(require('./cookies'));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const startServer = new Promise((res, rej) => {
  app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`);
    res(true);
  });
});

db.sync()
  .then(() => startServer)
  .then(() => console.log('Application started'))
  .catch((e) => console.log('Error starting server', e));
