const User = require("./User")
const Cart = require("./Cart")
const Category = require("./Category")
const Course = require("./Course")

// Relaciones entre Curso y Categoria
Course.belongsToMany(Category, {through: "CategoryCourse"});
Category.belongsToMany(Course, {through: "CategoryCourse"});



module.exports = {User, Cart, Category, Course};
