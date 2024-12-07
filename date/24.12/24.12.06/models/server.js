const { DataTypes } = require("sequelize");
const { sequelize } = require("./models");

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("DB 연결 성공!");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoinclement: true,
        primaryKey: true,
      },
    },
    {
      timestaps: false,
      paranoid: false,
      tablename: "jinwoo",
    }
  );
};
