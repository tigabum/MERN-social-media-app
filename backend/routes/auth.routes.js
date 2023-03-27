const express = require("express");
const authControllers = require("../controllers/auth.controller");

const router = express.Router();

router.route("/auth/signin").post(authControllers.signIn);
router.route("/auth/signout").get(authControllers.signOut);

module.exports = router;
