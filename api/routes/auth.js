const express = require("express");
const User = require("../models/User");
const router = express.Router();
const Sequalize = require("sequelize");
const passport = require("passport");
const AuthController = require("../controllers/auth");
const { isLogin } = require("../middlewares")


router.post("/register", AuthController.register);
router.post("/login", passport.authenticate("local"), AuthController.login);
router.post("/logout", AuthController.logout);
router.get("/me", isLogin, AuthController.me);

module.exports = router;
