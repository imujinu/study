const express = require("express");
const app = express();
const PORT = 8080;
const multer = require("multer");
const path = require("path");

// 미들웨어 설정
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));

//multer 설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const extension = path.extname(file.originalname); //확장자

      done(null, req.body.email + Date.now() + extension);
    },
  }),
  limits: { fieldSize: 5 * 1024 * 1024 },
});

app.get("/", (req, res) => {
  res.render("index");
  console.log("응답완료");
});

app.post("/result", uploadDetail.single("file"), (req, res) => {
  console.log(req.file);
  /* 
  fieldname: 'file',
  originalname: 'default.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: 'uploads/',
  filename: 's@nave.com.jpg',
  path: 'uploads\\s@nave.com.jpg',
  size: 1519
  */
  console.log(req.body);
  /* 

   */
  res.render("result", {
    // userInfo : req.body,

    ...req.body,
    img: req.file.path,
  });
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
