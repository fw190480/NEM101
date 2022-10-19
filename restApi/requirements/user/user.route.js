const express = require('express')
const app =express.Router();
const User = require('./user.modal');

app.use(express.json())

app.post('/login',async(req,res)=>{
    const {email,password} = req.body
    try{
        const user = await User.findOne({email,password})
        if(!user){
            return res.status(401).send('wrong email id or password')
        }else{
         
           res.send({token:`${email}:${password}`})
        }

    }catch(err){
        res.send(err.message)
    }
})

app.post('/signup',async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email})
        console.log(user)
        if(user){
            return res.status(200).send(`user already exit need to login `)
        }
        let newUser = User.create(req.body);
        res.status(200).send({token:`${email}:${password}`})
    }catch(err){
        res.send(err.message)
    }
})


module.exports = app