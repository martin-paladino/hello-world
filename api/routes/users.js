const express = require("express")
const router = express.Router()
const UsersController = require("../controllers/users")

router.post("/addcourse/:userId", UsersController.addCoursesToUser)
router.put("/:id",UsersController.editUser)

module.exports=router