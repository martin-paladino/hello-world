const express = require("express")
const morgan = require("morgan")
const passport = require("passport");
const session = require("express-session") // Permite guardar sesiones de los usuarios loggeados.
const cookieParser  = require("cookie-parser");
const db = require("./config/db")
const {User, Course, Category, Cart, UserCourse} = require("./models")
const routes = require("./routes")
const localStrategy = require("./config/localStrategy");

const app = express()

app.use(morgan("tiny"))
app.use(express.json())

// Parser que transforma de STR a OBJ la info contenida en una cookie.
app.use(cookieParser());

// Passport usará req.session para llevar un registro de quién está logueado en nuestra app.
app.use( session({secret: "hello-world"}) ); 

// Inicializamos Passport.
app.use(passport.initialize());

// Inicializamos el middleware de sesiones. Vinculamos la instancia de Passport con las sesiones configuradas en Express.
app.use(passport.session());

// Valida credenciales.
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

app.use((err,req,res,next)=>{
    console.log("ERROR");
    console.log(err);
    res.status(500).send(err.message);
})

db.sync({force: false})
.then(() => {
    console.log("db synchronized")
    app.listen(3001, () => console.log("Server running on port 3001"))
})
.catch(err => console.log({err}))
