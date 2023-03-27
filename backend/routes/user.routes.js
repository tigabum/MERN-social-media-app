// import express from "express";
// import userControllers from "../controllers/user.controllers";

const express = require("express");
const userControllers = require("../controllers/user.controllers");
const authControllers = require("../controllers/auth.controller");

const router = express.Router();

router.route("/users").post(userControllers.Create).get(userControllers.List);
router
  .route("/users/:userId")
  .put(
    authControllers.requireSignin,
    authControllers.hasAuthorized,
    userControllers.Update
  )
  .delete(
    authControllers.requireSignin,
    authControllers.hasAuthorized,
    userControllers.Remove
  )
  .get(authControllers.requireSignin, userControllers.Read);
router.param("userId", userControllers.userById);

// export default router;
module.exports = router;
