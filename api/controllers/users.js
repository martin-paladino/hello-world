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
  static addCoursesToUser(req, res, next) {
    User.findOne({ where: { id: req.params.userId } })
      .then((user) => {
        return {
          coursesPromise: Course.findAll({ where: { [Op.or]: req.body } }),
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
  //en el body le mando userId, courseId, purchased
  /* static addCoursesToUserOrders(req, res, next) {
    UserCourse.create(req.body)
    .then(newOrder => res.status(201).send(newOrder))
    .catch(next)
  } */

}

module.exports = UsersController;
