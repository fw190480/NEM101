const express = require('express');
const app = express.Router();

app.use((req,res,next)=>{
    if(req.body.password=='123' && req.body.username=='rahul'){
        next();
    }else{
     res.send('error')
    }
    
})

app.get('/',(req,res)=>{
    res.send('get request working')
})
app.get('/:id',(req,res)=>{
    res.send(`get request working with ${id}`)
})

app.post('/login',(req,res)=>{
    res.send('sucess')
})
module.exports = app;