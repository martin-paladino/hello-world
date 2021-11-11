const express = require("express")
const CoursesController = require("../controllers/courses")

const router = express.Router()

router.get("/getall", CoursesController.getAllCourses)
router.get("/:id", CoursesController.getUser)

module.exports = router