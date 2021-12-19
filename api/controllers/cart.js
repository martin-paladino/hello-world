const { Course, Cart } = require("../models");
const { Op } = require("sequelize");

class CartController {
  static addToCart(req, res, next) {
    Cart.findOrCreate({
      where: { userId: req.params.userId },
      defaults: { status: req.body.status }, 
    })
      .then(cart => {
        return {
          coursePromise: Course.findOne({ where: { id: req.params.courseId } }),
          cart: cart[0], 
        };
      })
      .then(({ coursePromise, cart }) => {
        coursePromise 
          .then(course => cart.addCourse(course))
          .then(() => cart.getCourses())
          .then(courses => res.status(201).send(courses));
      })
      .catch(next);
  }

  static addCoursesToCart(req, res, next) {
    const courses = req.body.map(course => {
      delete course.CategoryCourse
      delete course.CartCourse
      return course
    })
    Cart.findOrCreate({
      where: { userId: req.params.userId },
    })
      .then(cart => {
        return {
          coursePromise: Course.findAll({ where: { [Op.or]: courses } }),
          cart: cart[0],
        };
      })
      .then(({ coursePromise, cart }) => {
        return coursePromise.then(courses => {
          cart
            .addCourses(courses)
            .then(() => cart.getCourses())
            .then(courses => res.status(201).send(courses));
        });
      })
      .catch(next);
  }

  static removeCourseFromCart(req, res, next) {
    Cart.findOne({ where: { userId: req.params.userId } })
      .then(cart => {
        return {
          coursePromise: Course.findOne({ where: { id: req.params.courseId } }),
          cart,
        };
      })
      .then(({ coursePromise, cart }) => {
        coursePromise.then(course => {
          cart.removeCourse(course); 
          res.sendStatus(202);
        });
      })
      .catch(next);
  }

  static removeCoursesFromCart(req, res, next) {
    Cart.findOne({ where: { userId: req.params.userId } })
      .then(cart => {
        return {
          coursePromise: cart.getCourses(),
          cart,
        };
      })
      .then(({ coursePromise, cart }) => {
        coursePromise
          .then(courses => {
            return cart.removeCourses(courses);
          })
          .then(() => res.sendStatus(202));
      })
      .catch(next);
  }
  
  //para encontrar todos los productos del carrito de un user
  static getCoursesFromCart(req, res, next) {
    Cart.findOne({ where: { userId: req.params.userId } })
      .then(cart => cart.getCourses())
      .then(courses =>  res.status(200).send(courses))
      .catch(next);
  }
}

module.exports = CartController;
