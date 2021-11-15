const S  = require("sequelize");
const db = require("../config/db");

class Cart extends S.Model {}

Cart.init({

    status: {
        type: S.STRING,
        defaultValue: "pending",
        allowNull: false
    }

}, {sequelize: db, modelName: "cart"});


module.exports = Cart;
