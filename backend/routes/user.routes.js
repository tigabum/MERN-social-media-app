// import express from "express";
// import userControllers from "../controllers/user.controllers";

const express = require('express')
const userControllers = require('../controllers/user.controllers')

const router = express.Router();

router
  .route("/users")
  .post(userControllers.Create)
  .get(userControllers.List);
router
  .route("/users/:userId")
  .put(userControllers.Update)
  .delete(userControllers.Remove)
  .get(userControllers.Read);
router.param("userId", userControllers.userById);

// export default router;
module.exports = router
