require('dotenv').config();
const express = require("express");
const connect = require('./config/db')
const userRoute = require('./requirements/user/user.route')
const productRoute = require('./requirements/product/product.user')
const PORT = process.env.PORT


const app = express();
app.use('/users',userRoute)
app.use('/products',productRoute)


app.listen(PORT,async()=>{
    await connect();
    console.log(`listening on http://localhost:${PORT}`)
})