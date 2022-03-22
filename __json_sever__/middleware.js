module.exports = (req, res, next) => {
  console.log("login中间件生效");
  if (req.method === "POST" && req.path === "/login") {
    //为什么path只等于login？
    if (req.body.username === "jesseb" && req.body.password === "123456") {
      return res.status(200).json({
        user: { token: 123 },
      });
    } else {
      return res.status(400).json({ message: "用户名或密码错误" });
    }
  }
  next();
};
