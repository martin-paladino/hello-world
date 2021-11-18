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


  static sendMail(req,res,next) {
    
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
      
        var mailOptions = {
          from: "Hello World",
          to: "gaston.castagneri@gmail.com",
          subject: "Recibo de tus cursos en Hello World",
          text: JSON.stringify(req.body),
        };
        
        transporter.sendMail(mailOptions, (error, info) => {
          
          if (error) {
              console.log("errooor 1" )
              res.status(500).send(error.message);
          } else {
            console.log("mail enviado");
            res.status(200).jsonp(req.body);
          }
        });
      }).catch(err=>console.log(err))

    

  }

}

module.exports = UsersController;
