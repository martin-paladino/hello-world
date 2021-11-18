const Sequelize = require("sequelize")

const db = new Sequelize("hello_world", "luis", "1234", {
    host: "localhost",
    dialect: "postgres",
    logging: false
})

module.exports = db