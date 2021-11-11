const { Course } = require("../models")

class CoursesController {

    static getAllCourses(req, res) {
        Course.findAll()
        .then(courses => res.status(200).send(courses))
        .catch(err => console.log({err}))
    }

    static getCourse(req, res) {
        Course.findOne({ where: { id: req.params.id } })
        .then(course => res.status(200).send(course))
        .catch(err => console.log({err}))
    }

    static addCourse(req, res) {
        Course.create(req.body)
        .then(newCourse => res.status(201).send(newCourse))
        .catch(err => console.log({err}))
    }

    static updateCourse(req, res) {
        Course.update(req.body, {
            where: { id: req.params.id },
            returning: true
        })
        .then(updatedCourse => res.status(200).send(updatedCourse[1][0]))
        .catch(err => console.log({err}))
    }

    static deleteCourse(req, res) {
        Course.destroy({where: { id: req.params.id }})
        .then(() => res.sendStatus(202))
        .catch(err => console.log({err}))
    }
    
}

module.exports = CoursesController