import express from "express";
import userControllers from "../controllers/user.controllers";

const router = express.Router();

router
  .route("/api/v1/users")
  .post(userControllers.Create)
  .get(userControllers.List);
router
  .route("/api/v1/users/:userId")
  .put(userControllers.Update)
  .delete(userControllers.Remove)
  .get(userControllers.Read);
router.param("userId", userControllers.userById);

export default router;
