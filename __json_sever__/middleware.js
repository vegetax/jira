module.exports = (req, res, next) => {
  if (req.method === "post" && req.path === "/login") {
    //为什么path只等于login？
    if (req.body.username === "jesseb" && req.body.password === "123456") {
      return res.state(200).json({
        user: { token: 123 },
      });
    } else {
      return res.state(400).json({ message: "用户名或密码错误" });
    }
  }
  next();
};
