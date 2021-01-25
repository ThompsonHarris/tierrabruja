const db = require('./db');
const { STRING,TEXT } = require('sequelize');

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
    type: TEXT,
    allowNull: false,
  },
});

module.exports = Setting;
