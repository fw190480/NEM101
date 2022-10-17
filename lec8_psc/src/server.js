require('dotenv').config();
const express = require('express')
const cors = require('cors');
const connect = require('./config/db');
const userRoute = require('./features/users/user.route')
const productRoute = require('./features/products/product.route')
const cartRoute = require('./features/carts/cart.route')
const PORT = process.env.PORT
const app = express()

app.use(cors());
app.use(express())
app.use("users",userRoute)
app.use("products",productRoute)
app.use("cart",cartRoute)
app.get('/',(req,res)=>{
    res.send('hi')
})

app.listen(3000,async()=>{
    await connect();
    console.log(`listening on https://localhost:${PORT}`)
})
