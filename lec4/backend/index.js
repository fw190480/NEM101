const express = require('express');
const cors = require('cors')
const compression = require('compression')        // this is an library for reducing size of your data
const path = require('path')
const app = express();
const userrouter = require('./user.router')

const port = 8080
const db = require('./db.json')
app.use('/user',userrouter)
// let temp = path.join(__dirname,"db.json")
app.use(cors())
app.use(compression())             //
app.use(express.json())

const logger = (req,res,next)=>{
    console.log('before')
    next();
    console.log('after')
}
const logger2 = (req,res,next)=>{
    console.log('before2')
    next();
    console.log('after2')
}
// app.use(logger)
app.get('/name',logger,logger2,(req,res)=>{
    console.log('request')
    res.end();
})
app.get('/products',(req,res)=>{
    res.send(db)
})


app.listen(port,()=>{
    console.log('listening http://localhost:8080')
})