const express = require("express")
const db = require("./config/db")

const app = express()

db.sync({force: false})
.then(() => {
    console.log("db synchronized")
    app.listen(3001, () => console.log("Server running on port 3001"))
})
.catch(err => console.log({err}))
