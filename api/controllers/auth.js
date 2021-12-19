const { Users, User } = require("../models");

class AuthController {
  static register(req, res, next) {
    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        user ? res.status(400).send("ya hay un usuario con ese email") : 
        User.create(req.body)
          .then(newuser => res.status(201).send(newuser))
      })
      .catch(next)
  }

  static login(req, res, next) {
    res.send(req.user)
  }

  static logout(req, res, next) {
    req.logOut();
    res.sendStatus(200)
  }

  static me(req, res, next) {
    !req.user && res.sendStatus(401);
    res.send(req.user)
  }
}

module.exports = AuthController;
