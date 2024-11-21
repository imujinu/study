const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/user", (req, res) => {
  const username = "jinwoo";
  res.render("user", {
    name: username,
  });
});

app.listen(PORT, function () {
  console.log("nodemon is running!");
});
