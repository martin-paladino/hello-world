const { Users, User } = require("../models");

class AuthController {



    
  static register(req, res, next) {
    const { email } = req.body;
    User.findOne({ where: { email } }).then((user) => {
      if (user) {
        res.status(400).send("ya hay un usuario con ese email");
      } else {
        User.create(req.body)
          .then((newuser) => {
            res.statusCode = 201;
            res.send(newuser);
          })
          .catch(next);
      }
    });
  }

  static login(req,res) {
        res.send(() =>{
          console.log(req)
          req.user})
        .catch(next);

  }

  static logout(req, res, next) {
    req.logOut();
    res.sendStatus(200)
    .catch(next);

  }

  static me(req, res, next) {
    if (!req.user) {
      return res.sendStatus(401);
    }
    res.send(req.user)
    .catch(next);

  }

  
}

module.exports = AuthController;
