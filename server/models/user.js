const db = require('./db');
const bcrypt = require('bcrypt');
const { UUID, UUIDV4, STRING, BOOLEAN } = require('sequelize');

const User = db.define(
  'user',
  {
    id: {
      primaryKey: true,
      type: UUID,
      defaultValue: UUIDV4,
    },
    firstname: {
      type: STRING,
      allowNull: false,
    },
    lastname: {
      type: STRING,
      allowNull: false,
    },
    email: {
      type: STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: STRING,
      allowNull: false,
      validate: {
        len: [3, 70],
      },
    },
    isAdmin: {
      type: BOOLEAN,
      defaultValue: false,
    },
  },
  {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      },
    },
  }
);

User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User;
