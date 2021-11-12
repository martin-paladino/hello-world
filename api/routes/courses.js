const express = require("express")
const CoursesController = require("../controllers/courses")

const router = express.Router()

router.get("/getall", CoursesController.getAllCourses)
router.get("/:id", CoursesController.getCourse)
router.get("/:courseTitle", CoursesController.getCoursesFromTitle)
router.post("/add", CoursesController.addCourse)
router.put("/:id", CoursesController.updateCourse)
router.delete("/:id", CoursesController.deleteCourse)

module.exports = router