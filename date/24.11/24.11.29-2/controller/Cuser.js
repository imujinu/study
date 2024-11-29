const user2 = require("../model/user");

exports.home = (req, res) => {
  res.render("index");
};

exports.userLogin2 = (req, res) => {
  const Info1 = user2.user.split("\n");
  const Info2 = Info1[0].split("//");
  const Info3 = Info1[1].split("//");
  const Info4 = Info1[2].split("//");
  const UserInfo = [...Info2, ...Info3, ...Info4];

  if (UserInfo[0] === req.body.id && UserInfo[1] === req.body.pw) {
    res.send({ name: UserInfo[2], success: true });
  }
  if (UserInfo[3] === req.body.id && UserInfo[4] === req.body.pw) {
    res.send({ name: UserInfo[5], success: true });
  }
  if (UserInfo[6] === req.body.id && UserInfo[7] === req.body.pw) {
    res.send({ name: UserInfo[8], success: true });
  } else {
    res.send({ succes: false });
  }
};
