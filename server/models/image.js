const db = require('./db');
const { UUID, UUIDV4, INTEGER, STRING, ENUM } = require('sequelize');

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
  type: {
    type: ENUM,
    values: ['user', 'project'],
    allowNull: false,
  },
  thumbImage: {
    type: STRING(3000),
    allowNull: true,
  },
  thumbImagePath: {
    type: STRING,
    allowNull: true,
  },
  fullImage: {
    type: STRING(3000),
    allowNull: true,
  },
  fullImagePath: {
    type: STRING,
    allowNull: true,
  },
});

Image.beforeCreate((instance, options) => {
  if (instance.type === 'user') {
    return Image.findAll({
      where: {
        userId: instance.userId,
      },
      order: [['order', 'ASC']],
    })
      .then((collection) => {
        if (collection.length) {
          const last = collection.reduce((acc, { order }) => {
            if (acc) {
              if (acc < order) {
                acc = order;
                return acc;
              }
            } else {
              acc = order;
              return acc;
            }
          }, null);
          instance.order = last + 1;
        } else {
          instance.order = 1;
        }
      })
      .catch((err) => {
        console.log('before create failed', err);
      });
  } else if (instance.type === 'project') {
    return Image.findAll({
      where: {
        projectId: instance.projectId,
      },
      order: [['order', 'ASC']],
    })
      .then((collection) => {
        if (collection.length) {
          const last = collection.reduce((acc, { order }) => {
            if (acc) {
              if (acc < order) {
                acc = order;
                return acc;
              }
            } else {
              acc = order;
              return acc;
            }
          }, null);
          instance.order = last + 1;
        } else {
          instance.order = 1;
        }
      })
      .catch((err) => {
        console.log('before create failed', err);
      });
  }
});

Image.prototype.deleteSort = async function () {
  if (this.type === 'user') {
    try {
      await this.destroy();
      const allImages = await Image.findAll({
        where: { userId: this.userId },
        order: [['order', 'ASC']],
      });
      await allImages.forEach(async (ele, idx) => {
        await ele.update({ order: idx + 1 });
      });
      return { userId: this.UserId };
    } catch (e) {
      return { error: e };
    }
  } else if (this.type === 'project') {
    try {
      await this.destroy();
      const allImages = await Image.findAll({
        where: { projectId: this.projectId },
        order: [['order', 'ASC']],
      });
      await allImages.forEach(async (ele, idx) => {
        await ele.update({ order: idx + 1 });
      });
      return { projectId: this.projectId };
    } catch (e) {
      return { error: e };
    }
  }
};

Image.prototype.moveSort = async function (newPos) {
  if (this.type === 'user') {
    const tempOrder = this.order;
    try {
      const tempInstance = await Image.findOne({
        where: { order: newPos, userId: this.userId },
      });
      await this.update({ order: newPos });
      if (tempInstance) {
        await tempInstance.update({
          order: tempOrder,
        });
      }
      return { message: 'successfully re-ordered' };
    } catch (e) {
      return { error: e };
    }
  } else if (this.type === 'project') {
    const tempOrder = this.order;
    try {
      const tempInstance = await Image.findOne({
        where: { order: newPos, projectId: this.projectId },
      });
      await this.update({ order: newPos });
      if (tempInstance) {
        await tempInstance.update({
          order: tempOrder,
        });
      }
      return { message: 'successfully re-ordered' };
    } catch (e) {
      return { error: e };
    }
  }
};

module.exports = Image;
