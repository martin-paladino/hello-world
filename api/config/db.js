const Sequelize = require("sequelize")

const db = new Sequelize("hello_world", "postgres", "postgres", {
    host: "localhost",
    dialect: "postgres",
    logging: false
})

module.exports = db