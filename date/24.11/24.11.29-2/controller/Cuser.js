const user2 = require("../model/user");

exports.home = (req, res) => {
  res.render("index");
};

exports.userLogin2 = (req, res) => {
  const Info = user2.user.split("\n");
  for (i = 0; i <= Info.length; i++) {
    const userInfo = Info[i].split("//");
    if (userInfo[0] === req.body.id && userInfo[1] === req.body.pw) {
      res.send({ name: userInfo[2], success: true });
    } else {
      res.send({ success: false });
    }
  }
};
