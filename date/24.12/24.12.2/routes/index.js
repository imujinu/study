const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.main);
//controller는 객체형태로 불러오고 있다.

router.post("/login", controller.login);

router.post("/login2", controller.login2);

module.exports = router;
