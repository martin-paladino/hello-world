const { Course, Cart } = require("../models")


class CartController {

    //para agregar un curso al carrito
    static addToCart(req, res, next) {
        //chequea si existe un carro con el userId que le llega como req
        //si no existe, lo crea
        Cart.findOrCreate({
            where: { userId: req.params.userId },
            defaults: { status: req.body.status } //si se crea, le asigna un valor a status
        })
            .then(cart => { //una vez creado el carro, busca el curso pasado por req.param y retorna la promesa que devuelve
                return {
                    coursePromise: Course.findOne({ where: { id: req.params.courseId } }),
                    cart: cart[0] //tambien retorna la instancia del carro encontrado o creado [0] ->carro, [1]->se fue creado o encontrado (true/false)
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

    //para borrar un curso especifico del carrito
    static removeCourseFromCart(req, res, next) {
        //busca el carrito del user a partir del userid pasado por req.param
        Cart.findOne({ where: {userId: req.params.userId }})
        .then(cart => { //encuentra el carro
            //busca el curso pasado por req.param y retorna la promesa que devuelve
            return {
                coursePromise: Course.findOne({ where: { id: req.params.courseId } }),
                cart //tambien se retorna el carrito del user
            }
        })
        .then(({ coursePromise, cart }) => {
            coursePromise
            .then(course => { //la promesa devuelve el curso encontrado
                cart.removeCourse(course) //y lo borra del carrito
                res.sendStatus(202)
            })
        })
        .catch(next)
    }

    //para encontrar todos los productos del carrito de un user
    static getCoursesFromCart(req, res, next) {
        Cart.findOne({ where: {userId: req.params.userId }})
        .then(cart => cart.getCourses())
        .then(courses => res.status(200).send(courses))
        .catch(next)
    }

}

module.exports = CartController

