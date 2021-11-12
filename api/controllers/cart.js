const { Course, Cart } = require("../models")


class CartController {

   
    static addToCart(req, res, next) {
        Cart.findOrCreate({
            where: { userId: req.params.userId },
            defaults: { status: req.body.status } //si se crea, le asigna un valor a status
        })
            .then(cart => { //una vez creado el carro, busca el curso pasado por req.param y retorna la promesa que devuelve
                return {
                    coursePromise: Course.findOne({ where: { id: req.params.courseId } }),
                    cart: cart[0] 
                }
            })
            .then(({ coursePromise, cart }) => {
                coursePromise //la promesa devuelve el curso encontrado
                    .then(course => {
                        cart.addCourse(course) //se le asigna el curso al carro
                        res.status(201).send(cart) //se envia el carro
                    })
            })
            .catch(next)
    }

    
    static removeCourseFromCart(req, res, next) {
        Cart.findOne({ where: {userId: req.params.userId }})
        .then(cart => { 
            //busca el curso pasado por req.param y retorna la promesa que devuelve
            return {
                coursePromise: Course.findOne({ where: { id: req.params.courseId } }),
                cart //tambien se retorna el carrito del user
            }
        })
        .then(({ coursePromise, cart }) => {
            coursePromise
            .then(course => {
                cart.removeCourse(course) 
                res.sendStatus(202)
            })
        })
        .catch(next)
    }

   
    static getCoursesFromCart(req, res, next) {
        Cart.findOne({ where: {userId: req.params.userId }})
        .then(cart => cart.getCourses())
        .then(courses => res.status(200).send(courses))
        .catch(next)
    }

}

module.exports = CartController

