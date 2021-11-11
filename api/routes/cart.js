const express = require("express")
const CartController = require("../controllers/cart")

const router = express.Router()

router.post("/addtocart/:userId/:courseId", CartController.addToCart)

module.exports = router