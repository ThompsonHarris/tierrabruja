const db = require('./db');
const Project = require('./project');
const Image = require('./image');
const User = require('./user');
const Session = require('./session');
const Setting = require('./setting');

User.hasMany(Project);
Project.belongsTo(User);

Project.hasMany(Image);
Image.belongsTo(Project);

User.hasMany(Image);
Image.belongsTo(User);

Setting.hasMany(Image);
Image.belongsTo(Setting);

module.exports = { db, Project, Image, User, Session, Setting };
