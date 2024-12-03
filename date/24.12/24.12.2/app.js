const express = require("express");
const app = express();
const PORT = 8080;

// 미들 웨어 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 바디 파서 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//라우터 불러오기
// const indexRouter = require("./routes/index"); default값이 index이다.
const indexRouter = require("./routes");
app.use("/", indexRouter);

app.get("*", (req, res) => {
  res.send("<h2>page not found </h2>");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
