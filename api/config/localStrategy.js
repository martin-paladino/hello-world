const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");


const localStrategy = new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password"
    },
    
    function (email, password, done) {
        User.findOne({where: {email} })
        .then(user => {
            // User not found.
            if(!user) return done(null, false, {message: "Incorrect username."});
            // User found. Valido password.
            user.createHash(password, user.salt)
            .then(hash => {
                // Si no coincide.
                if(hash !== user.password) return done(null, false, {message: "Incorrect password."});
                // Si coincide.
                done(null, user);
            })
        })
        .catch(done);
    }
);

module.exports = localStrategy;