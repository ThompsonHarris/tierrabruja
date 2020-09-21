const sequelize = require('sequelize');

const db = new sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/tierrabruja',
  {
    logging: false,
  }
);

module.exports = db;
