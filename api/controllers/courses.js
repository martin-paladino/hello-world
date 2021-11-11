const { Course } = require("../models")

class CoursesController {

    static getAllCourses(req, res, next) {
        Course.findAll()
        .then(courses => res.status(200).send(courses))
        .catch(next)
    }

    static getCourse(req, res, next) {
        Course.findOne({ where: { id: req.params.id } })
        .then(course => res.status(200).send(course))
        .catch(next)
    }

    static addCourse(req, res, next) {
        Course.create(req.body)
        .then(newCourse => res.status(201).send(newCourse))
        .catch(next)
    }

    static updateCourse(req, res, next) {
        Course.update(req.body, {
            where: { id: req.params.id },
            returning: true
        })
        .then(updatedCourse => res.status(200).send(updatedCourse[1][0]))
        .catch(next)
    }

    static deleteCourse(req, res, next) {
        Course.destroy({where: { id: req.params.id }})
        .then(() => res.sendStatus(202))
        .catch(next)
    }
    
}

module.exports = CoursesController