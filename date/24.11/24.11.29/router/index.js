const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.home);
router.post("/login", controller.userLogin);
router.post("/login2", controller.userLogin2);
module.exports = router;
