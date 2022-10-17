require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connect = require('../config/db')
const userRouter = require("../users/user.route")




//  we are gettin port form .env file which is created always in the level of package.json fie
const PORT = process.env.PORT

// creating our server 
const app = express();
// used for parse when we getting data from body in like post request
app.use('/users',userRouter)
app.use(express.json());
// a middleware used for we can say linking our backend port to frontend port then we use cors library
// if you want to kill the port then we can use npx kill-port 8080
app.use(cors());




// connect()
app.listen(PORT,async()=>{
    await connect()
    console.log(`listening on http://localhost:${PORT}`)
})