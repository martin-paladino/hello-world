const express = require("express")
const morgan = require("morgan")
const passport = require("passport");
const session = require("express-session")
const cookieParser  = require("cookie-parser");
const db = require("./config/db")
const {User, Course, Category, Cart, UserCourse} = require("./models")
const routes = require("./routes")
const localStrategy = require("./config/localStrategy");

const app = express()

app.use(morgan("tiny"))
app.use(express.json())

app.use(cookieParser());

app.use( session({secret: "hello-world"}) ); 

app.use(passport.initialize());

app.use(passport.session());
passport.use(localStrategy);

// Guardamos el id en la sesión (escribimos la cookie).
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// Obtenemos el usuario a partir del id guardado (leemos la cookie).
passport.deserializeUser(function(id, done) {
    User.findByPk(id)
    .then(user => done(null, user))
    .catch(done);
});

app.use("/api", routes)

app.use((err,req,res,next)=>    {
    console.log("ERROR");
    console.log(err);
    res.status(500).send(err.message);

})

db.sync({force:false})
.then(() => {
    console.log("db synchronized")
    app.listen(3001, () => console.log("Server running on port 3001"))
})
.catch(err => console.log({err}))
