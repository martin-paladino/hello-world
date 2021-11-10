const S  = require("sequelize");
const db = require("../config/db");

class UserCourse extends S.Model {}

UserCourse.init({
    purchased: {
        type: S.BOOLEAN,
        defaultValue: false
    }
}, {sequelize: db, modelName: "UserCourse"})

module.exports = UserCourse