const express=require("express")
const router=express.Router()
const UsersController=require("../controllers/users")



router.put("/:id",UsersController.editUser)



module.exports=router