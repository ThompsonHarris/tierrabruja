const db = require('./db');
const { STRING } = require('sequelize');

const Setting = db.define('setting', {
  sitename: {
    type: STRING,
    allowNull: false,
  },
  sitedescription: {
    type: STRING,
    allowNull: false,
  },
  defaultemail: {
    type: STRING,
    allowNull: false,
  },
  aboutdescription: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Setting;
