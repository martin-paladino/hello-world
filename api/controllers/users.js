const { User, Course, UserCourse } = require("../models");

const nodemailer = require("nodemailer");

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
    const courses = req.body.map((course) => {
      delete course.CartCourse;
      return course;
    });
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

  static sendMail(req, res, next) {
    User.findOne({ where: { id: req.params.userId } })
      .then((user) => {
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: "rod.desarasqueta@gmail.com",
            pass: "tqvgurvykfppveee",
          },
        });
        console.log("DATATTTTTTT:",user.dataValues.email);
        let preciofinal = 0;
        let texto = "Gracias " + user.dataValues.fullname + ", por tu compra.\n\nRecibo:\n";
        let a = req.body.map((curso, i) => {
          texto +=
            " " +
            (i + 1) +
            ". " +
            curso.title +
            " / Precio: " +
            curso.price +
            "\n";
          preciofinal += parseInt(curso.price);
        });
        texto += "\n\nTotal abonado: US$" + preciofinal;
        var mailOptions = {
          from: "Hello World",
          to: user.dataValues.email,
          subject: "Recibo de tus cursos en Hello World",
          text: texto,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("errooor 1");
            res.status(500).send(error.message);
          } else {
            console.log("mail enviado");
            res.status(200).jsonp(req.body);
          }
        });
      })
      .catch((err) => console.log(err));
  }

  //----------controllers para las órdenes(userCourses) del user----------

  //en el body le mando userId, courseId, purchased
  static addCoursesToUserOrders(req, res, next) {
    UserCourse.bulkCreate(req.body)
      .then((newOrder) => res.status(201).send(newOrder))
      .catch(next);
  }

  static getUserOrders(req, res, next) {
    UserCourse.findAll({ where: { userId: req.params.userId } })
      .then((userOrders) => res.status(200).send(userOrders))
      .catch(next);
  }

  static getCoursesFromOrders(req, res, next) {
    User.findOne({ where: { id: req.params.userId } })
      .then((user) => user.getCourses())
      .then((courses) => res.status(200).send(courses))
      .catch(next);
  }

  static getMyCourses(req, res, next) {
    UserCourse.findAll({where: { userId: req.params.userId, purchased: true }})
    .then(myCourses => {
      res.status(200).send(myCourses)})
    .catch(next)
  }

}

module.exports = UsersController;
