const S = require("sequelize");
const User = require("./User")
const Cart = require("./Cart")
const Category = require("./Category")
const Course = require("./Course");
const UserCourse = require("./UserCourse")

// Relaciones entre Curso y Categoria
Course.belongsToMany(Category, {through: "CategoryCourse"});
Category.belongsToMany(Course, {through: "CategoryCourse"});

// Relaciones entre User y Course
User.belongsToMany(Course, {through: UserCourse});
Course.belongsToMany(User, {through: UserCourse});

// Relaciones entre User y Cart
Cart.belongsTo(User);

// Relaciones entre Course y Cart
Course.belongsToMany(Cart, {through: "CartCourse"})
Cart.belongsToMany(Course, {through: "CartCourse"})

module.exports = {User, Cart, Category, Course, UserCourse};