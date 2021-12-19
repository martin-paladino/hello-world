const S = require("sequelize")
const db = require("../config/db")

class Course extends S.Model {}

Course.init({
    title: {
        type: S.STRING(1000),
        allowNull: false
    },
    description: {
        type: S.TEXT,
        allowNull: false
    },
    professor: {
        type: S.STRING(1000),
        allowNull: false
    },
    image: {
        type: S.STRING(1000),
        allowNull: false
    },
    review: {
        type: S.TEXT,
        allowNull: false
    },
    price: {
        type: S.DECIMAL(10, 2),
        allowNull: false
    },
    duration: {
        type: S.DECIMAL(10, 2),
        allowNull: false
    },
    accessLink: {
        type: S.STRING(1000),
        allowNull: false
    },
    videoPreview: {
        type: S.STRING(1000),
        allowNull: false
    }
}, { sequelize: db, modelName: "course", timestamps: false})

module.exports = Course