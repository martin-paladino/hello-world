const express = require("express")
const router = express.Router()
const UsersController = require("../controllers/users")

router.post("/addcourse/:userId", UsersController.addCoursesToUser)
router.put("/:id",UsersController.editUser)
//router.post("/adduserorders", UsersController.addCoursesToUserOrders)

module.exports=router