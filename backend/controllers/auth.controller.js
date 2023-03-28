const User = require("../models/user.model");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const { expressjwt } = require("express-jwt");

const signIn = async (req, res) => {
  console.log("singing data", req.body)
  try {
    var user = await User.findOne({ email: req.body.email });
    console.log('user is available', user)
    if (!user) return res.status(401).json({ error: "User not found" });
    console.log("authenticate", user.authenticate(req.body.password))
    if (!user.authenticate(req.body.password)) {
      return res
        .status(401)
        .send({ error: "Email and password doesn't match" });
    }


    const token = jwt.sign({ _id: user._id }, config.jwtSecret)

    res.cookie("t", token, { expire: new Date() + 9999 });
    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    return res.status(401).json({ error: "Couldn't sign in" });
  }
};

const signOut = (req, res) => {
  res.clearCookie("t");
  return res.status(200).json({ message: "signed out" });
};

const requireSignin = expressjwt({
  secret: config.jwtSecret,
  userProperty: "auth",
  algorithms: ["HS256"]
});

const hasAuthorized = (req, res, next) => {
  const authorized =
    req.profile._id && req.auth._id && req.profile._id === req.auth._id;

  if (!authorized)
    return res.status(401).json({ error: "user has not authorized" });

  next();
};

module.exports = { signIn, signOut, requireSignin, hasAuthorized };
