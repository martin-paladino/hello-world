
const isLogin = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    else res.sendStatus(401);
  }

const isAdmin = (req, res, next) => {
    req.user.isAdmin ?  next() : res.status(401).send("El user no es admin")
}

module.exports = {isLogin, isAdmin}