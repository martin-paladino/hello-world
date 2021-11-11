const { User } = require("../models")

class AdminController {

    static getAll = (req, res, next) => {
        res.status(200).send("funciona")
    }
  
}

module.exports = AdminController