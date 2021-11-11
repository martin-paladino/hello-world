const express = require("express")
const AdminController = require("../controllers/admin")
const {isAdmin} = require("../middlewares")

const router = express.Router()

router.get("/", isAdmin, AdminController.getAll)

module.exports = router