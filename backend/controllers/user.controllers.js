import dbErrorHandler from "../helpers/dbErrorHandler";
import User from "../models/user.model";

const Create = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    return res.status(200).json({
      message: "Successfully user created",
    });
  } catch (err) {
    return res.status(400).json({
      message: dbErrorHandler.getErrorMessage(err),
    });
  }
};

const List = async (req, res) => {
  try {
    const users = await User.find().select("email name created updated");
    return res.json(users);
  } catch (err) {
    return res.status(400).json({
      message: dbErrorHandler.getErrorMessage(err),
    });
  }
};

const Update = (req, res) => {};

const Remove = (req, res) => {};

const Read = (req, res) => {};

const userById = (req, res) => {};

export default { Create, List, Update, Remove, Read, userById };
