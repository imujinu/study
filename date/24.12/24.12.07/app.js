const express = require("express");
const app = express();
const PORT = 8080;
require("dotenv").config();
const {sequelize} = require('./models/index')

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const { sequelize } = require("./models/index");

sequelize.sync({ force: false }).then(() => {
  console.log("db연결완료");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
