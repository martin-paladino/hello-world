const Sequelize = require("sequelize")


const db = new Sequelize("hello_world", null, null, {

    host: "localhost",
    dialect: "postgres",
    logging: false
})

module.exports = db