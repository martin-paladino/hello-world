const express = require("express")
const morgan = require("morgan")


const db = require("./config/db")
const models = require("./models")
const routes = require("./routes")

const app = express()

app.use(morgan("tiny"))
app.use(express.json())

app.use("/api", routes)

db.sync({force: false})
.then(() => {
    console.log("db synchronized")
    app.listen(3001, () => console.log("Server running on port 3001"))
})
.catch(err => console.log({err}))
