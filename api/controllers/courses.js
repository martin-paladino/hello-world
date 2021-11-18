const { Course, Category, UserCourse } = require("../models")

class CoursesController {

    static getAllCourses(req, res, next) {
        Course.findAll()
            .then(courses => res.status(200).send(courses))
            .catch(next)
    }

    static checkIfPurchased(req, res, next) {
        if(req.user)
        {const courseId = parseInt(req.params.courseId)
        UserCourse.findAll({ where: { userId: req.user.id, purchased: true } })
            .then(userCourses => {
                const userCourse = userCourses.find(userCourse => userCourse.courseId === courseId
                )
                res.status(200).send(userCourse ? true : false)
            })}
            else {
                res.send(false)
            }
    }

    static getCourse(req, res, next) {
        Course.findOne({ where: { id: req.params.id } })
            .then(course => res.status(200).send(course))
            .catch(next)
    }

    static getCoursesFromTitle(req, res, next) {
        Course.findAll({ where: { title: req.params.courseTitle } })
            .then(courses => res.status(200).send(courses))
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
        Course.destroy({ where: { id: req.params.id } })
            .then(() => res.sendStatus(202))
            .catch(next)
    }

    static getCoursesFromCategory(req, res, next) {
        Category.findOne({ where: { name: req.params.category } })
            .then(category => category.getCourses())
            .then(courses => res.status(200).send(courses))
            .catch(next)

    }

    static addCategoryToCourse(req, res, next) {
        Course.findOne({ where: { id: req.params.courseId } })
            .then(course => {
                return {
                    course,
                    categoryPromise: Category.findOne({ where: { id: req.params.categoryId } })
                }
            })
            .then(({ course, categoryPromise }) => {
                categoryPromise
                    .then(category => {
                        course.addCategory(category)
                        res.sendStatus(201)
                    })
            })
            .catch(next)
    }
}

module.exports = CoursesController