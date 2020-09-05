const express = require('express');
const apiRouter = require('./api/index');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
