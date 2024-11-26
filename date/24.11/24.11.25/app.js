const express = require("express");
const app = express();
const PORT = 8080;
const multer = require("multer");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/");
    },
    filename: function (req, file, done) {
      const extension = path.extname(file.originalname);
      done(null, path.basename(`uploads/${req.body.email}`) + extension);
    },
  }),
  limits: { fieldSize: 5 * 1024 * 1024 },
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/result", uploadDetail.single("img"), (req, res) => {
  console.log(req.body.email);
  res.render("result", {
    userInfo: req.body,
    img: req.file,
  });
});

app.get("/api", (req, res) => {
  console.log("응답완료!");
  res.render("api");
});

// app.get("https://api.thecatapi.com/v1/images/search", (req, res) => {
//   console.log(req.query);
//   res.send(req.file);
// });

app.listen(PORT, () => {
  console.log(`https://localhost:${PORT}`);
});
