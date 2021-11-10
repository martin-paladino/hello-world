const S = require("sequelize");
const db        = require("../config/db");

class User extends S.Model {}

User.init({
    fullname: {
        type: S.STRING,
        allowNull: false
    },

    email: {
        type: S.STRING,
        allowNull: false,
        validate: {isEmail: true}
    },

    password: {
        type: S.STRING,
        allowNull: false
    },

    salt: {
        type: S.STRING
    },

    isAdmin: {
        type: S.BOOLEAN
    }

}, {sequelize: db, modelName: "user"});


module.exports = User;