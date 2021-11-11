const {Course, Cart} = require("../models")


class CartController {

    //para agregar un curso al carrito
    static addToCart(req, res, next) {
        Course.findOne({where: {id: req.params.courseId}})
        .then(course => Cart.findOrCreate({where: {}}))
    }
}

module.exports = CartController

