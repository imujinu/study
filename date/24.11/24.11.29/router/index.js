const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.home);
router.post("/login", controller.userLogin);

module.exports = router;
