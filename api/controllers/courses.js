const { Course } = require("../models")

class CoursesController {

    static getAllCourses(req, res) {
        Course.findAll()
        .then(courses => res.status(200).send(courses))
        .catch(err => console.log({err}))
    }

    static getUser(req, res) {
        Course.findOne()
    }
    
}

module.exports = CoursesController