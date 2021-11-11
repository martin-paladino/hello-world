const express = require("express")

const auth = require("./auth")
const courses = require("./courses")
const users = require("./users")
const admin = require("./admin")

const router = express.Router()

router.use("/auth", auth)
router.use("/courses", courses)
router.use("/users", users)

module.exports = router