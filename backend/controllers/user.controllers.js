// import dbErrorHandler from "../helpers/dbErrorHandler";
const {dbErrorHandler} = require('../helpers/dbErrorHandler')
// import User from "../models/user.model";
const User = require('../models/user.model')

// import extend from "lodash/extend";
const extend = require('lodash/extend')

const Create = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    return res.status(200).json({
      message: "Successfully user created",
    });
  } catch (err) {
    return res.status(400).json({
      error: dbErrorHandler.getErrorMessage(err),
    });
  }
};

const List = async (req, res) => {
  try {
    const users = await User.find().select("email name created updated");
    return res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: dbErrorHandler.getErrorMessage(err),
    });
  }
};

const Update = async (req, res) => {
  try {
    let user = req.profile;
    user = extend(user, req.body);
    user.updated = Date.now();
    await user.save();
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  } catch (err) {
    return res.status(400).json({
      error: dbErrorHandler.getErrorMessage(err),
    });
  }
};

const Remove = async (req, res) => {
  try {
    let user = req.profile;
    await user.remove();
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  } catch (err) {
    return res.status(400).json({
      error: dbErrorHandler.getErrorMessage(err),
    });
  }
};

const Read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

const userById = async (req, res, next, id) => {
  try {
    let user = await User.findById(id);

    if (!user) return res.status(400).json({ error: "User is not found!" });
    req.profile = user;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Couldn't retrieve user",
    });
  }
};

// export default { Create, List, Update, Remove, Read, userById };
module.exports = {Create, List, Update, Remove, Read, userById}
