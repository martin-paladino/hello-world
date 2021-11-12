const {User} = require("../models")

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
}

module.exports=UsersController