const express = require("express")
const morgan = require("morgan")


const db = require("./config/db")
const routes = require("./routes")
const models = require("./models")



const app = express()

app.use(morgan("tiny"))
app.use(express.json())

app.use("/api", routes)

app.use((err,req,res,next)=>    {
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
