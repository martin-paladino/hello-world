const { User, Course, UserCourse } = require("../models");
const { Op } = require("sequelize");

class UsersController {
  static editUser(req, res, next) {
    User.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    })
      .then((user) => res.send(user[1][0]))
      .catch(next);
  }

  //esta no se usó al final, la de abajo si
  static addCoursesToUser(req, res, next) {
    const courses = req.body.map(course => {
      delete course.CartCourse
      return course
    })
    User.findOne({ where: { id: req.params.userId } })
      .then((user) => {
        return {
          coursesPromise: Course.findAll({ where: { [Op.or]: courses } }),
          user,
        };
      })
      .then(({ coursesPromise, user }) => {
       return coursesPromise.then((courses) => {
          user.addCourses(courses);
          res.status(201).send(courses);
        });
      })
      .catch(next);
  }
  
  //----------controllers para las órdenes(userCourses) del user----------

  //en el body le mando userId, courseId, purchased
  static addCoursesToUserOrders(req, res, next) {
    UserCourse.bulkCreate(req.body)
    .then(newOrder => res.status(201).send(newOrder))
    .catch(next)
  }

  static getUserOrders(req, res, next) {
    UserCourse.findAll({where: { userId: req.params.userId }})
    .then(userOrders => res.status(200).send(userOrders))
    .catch(next)
  }

  static getCoursesFromOrders(req, res, next) {
    User.findOne({where: {id: req.params.userId}})
    .then(user => user.getCourses())
    .then(courses => res.status(200).send(courses))
    .catch(next)
  }

}

module.exports = UsersController;
