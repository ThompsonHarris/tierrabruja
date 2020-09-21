const db = require('./db');
const { UUID, UUIDV4, INTEGER, STRING } = require('sequelize');

const Image = db.define('image', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
    allowNull: false,
  },
  order: {
    type: INTEGER,
    allowNull: true,
  },
  previewImg: {
    type: STRING(3000),
    allowNull: true,
  },
  fullImage: {
    type: STRING(3000),
    allowNull: true,
  },
});

module.exports = Image;
