const S = require("sequelize")
const db = require("../config/db")

class Category extends S.Model{}

Category.init({
    name: {
        type: S.STRING,
        allowNull: false
    }
},
{ sequelize: db, modelName: "category", timestamps: false })

module.exports = Category