const user = require("../model/User");

exports.userLogin = (req, res) => {
  const userInfo = user.userInfo();
  console.log(userInfo);
  console.log(req.body);
  if (userInfo.userId === req.body.id && userInfo.userPw === req.body.pw) {
    res.send({
      Login: true,
      user: userInfo.userId,
    });
  } else {
    res.send({
      Login: false,
    });
  }
};

exports.home = (req, res) => {
  res.render("index");
};
