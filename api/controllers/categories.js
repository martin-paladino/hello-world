const { Category } = require("../models")

class CategoriesController {
    static addCategory(req, res, next) {
        Category.create(req.body)
        .then(newCategory => res.status(201).send(newCategory))
        .catch(next)
    }

    static getCategories(req, res, next) {
        Category.findAll()
        .then(categories => res.status(200).send(categories))
        .catch(next)
    }

    static removeCategory(req, res, next) {
        Category.destroy({where: { id: req.params.id }})
        .then(() => res.sendStatus(202))
        .catch(next)
    }
    static updateCategory(req, res, next) {
        Category.update(req.body, {
            where: { id: req.params.id },
            returning: true
        })
        .then(updatedCategory => res.status(200).send(updatedCategory[1][0]))
        .catch(next)
    }
}

module.exports = CategoriesController