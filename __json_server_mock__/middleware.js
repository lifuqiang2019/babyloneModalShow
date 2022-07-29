module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    const { username, password } = req.body;
    if (username === "admin" && password === "123456") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
      // res.json({
      //   code: 200,
      //   data: {
      //     token: 'admin'
      //   }
      // })
    } else {
      return res.status(400).json({
        // error: '用户名或密码错误',
        message: "用户名或密码错误",
      });
    }
  }
  next();
};
