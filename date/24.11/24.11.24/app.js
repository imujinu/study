const express = require("express");
const app = express();
const PORT = 8080;

// 1. 뷰엔진 설정.

app.set("view engine", "ejs");
app.set("views", "./views");

// 2. 미들웨어 설정
app.use("/static", express.static(__dirname + " / public"));

// 3. 바디파서 설정

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// api

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/ajax", (req, res) => {
  res.send(req.query);
});

app.listen(PORT, () => {});
