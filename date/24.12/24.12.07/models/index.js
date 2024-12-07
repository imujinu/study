"use strict";

const Sequelize = require("sequelize");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");
const config = require(__dirname + "/../config/config.js")["dev"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const user = sequelize.define(
  "user",
  {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    freezeTableName: false,
  }
);

const post = sequelize.define("post", {
  title: DataTypes.STRING,
  content : DataTypes.TEXT,

});

user.hasMany (post , {foreignkey : 'userId'})
post.belongsTo(user)

db.user = user;
db.post = post;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
