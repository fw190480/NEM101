const express = require('express');
const User = require('./user.model.js')
const app = express.Router();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send('hi this is working')
})

app.post('/login',async (req,res)=>{
    const {email,password} = req.body;
    console.log(email,password)
    try{
        const user = await User.findOne({email})
        if(user){
            if(user.password==password){
                res.status(404).send({token:email+password})
            }else{
                res.status('wrong password')
            }
        }else{
            res.send('authentication fail')
        }
    }catch(err){
        req.status(404).send(err.message)
    }
})


module.exports = app