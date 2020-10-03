const db = require('./db');
const { UUID, UUIDV4, INTEGER, STRING, ENUM } = require('sequelize');
const { Image } = require('./image');

const Project = db.define('project', {
  id: {
    primaryKey: true,
    type: UUID,
    defaultValue: UUIDV4,
    allowNull: false,
  },
  title: {
    type: STRING,
    validate: {
      len: {
        args: [4, 32],
        msg: 'Title length is not is not in range',
      },
    },
    allowNull: false,
  },
  description: {
    type: STRING(3000),
  },
  address: {
    type: STRING,
    allowNull: false,
    validate: {
      len: {
        args: [4, 32],
        msg: 'address length is not is not in range',
      },
    },
  },
  state: {
    type: STRING,
    allowNull: false,
    validate: {
      len: {
        args: [0, 3],
        msg: 'state length is not is not in range',
      },
    },
  },
  city: {
    type: STRING,
    allowNull: false,
    validate: {
      len: {
        args: [0, 10],
        msg: 'city length is not is not in range',
      },
    },
  },
  status: {
    type: ENUM,
    values: ['PENDING', 'PLANNING', 'APPROVED', 'INPROGRESS', 'COMPLETE'],
    allowNull: false,
  },
});

Project.prototype.DeleteAll = function () {
  return new Promise((res, rej) => {
    this.images.forEach((image) => {
      image.destroy();
    });
    this.destroy();
    res('success');
  });
};

module.exports = Project;
