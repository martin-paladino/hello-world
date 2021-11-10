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
User.belongsToMany(Course, {through: "UserCourses"});
Course.belongsToMany(User, {through: "UserCourses"});

// Relaciones entre User y Cart
Cart.belongsTo(User);


// Relaciones entre Course y Cart



module.exports = {User, Cart, Category, Course, UserCourse};
