const express = require("express")
const router = express.Router()
const UsersController = require("../controllers/users")

router.post("/addcourses/:userId", UsersController.addCoursesToUser)
router.put("/:id",UsersController.editUser)

//----------rutas para las órdenes(userCourses) del user----------
router.post("/adduserorders", UsersController.addCoursesToUserOrders)
router.get("/getuserorders/:userId", UsersController.getUserOrders)
router.get("/getcoursesfromorders/:userId", UsersController.getCoursesFromOrders)

module.exports=router