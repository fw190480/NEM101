const express = require('express')
const app = express.Router()
const Users = require('./user.model')
app.use(express.json())

app.get('/',async(req,res)=>{
    try{
        let userData = await Users.find()
        res.status(200).send(userData)
    }catch(err){
        res.send(err.message)
    }
})

app.get('/:id',async(req,res)=>{
    try{
        let findById = await Users.findById(req.params.id);
        res.status(200).send(findById)
    }catch(err){
        res.send(err.message)
    }
})

app.post('/',async(req,res)=>{
    try{
        console.log(req.body)
        let updatedUser = await Users.create(req.body)
        res.status(200).send(updatedUser)
    }catch(err){
        res.send(err.message)
    }
})
app.delete('/:id',async(req,res)=>{
    try{
        console.log(req.body)
        let updatedUser = await Users.findByIdAndDelete(req.params.id)
        res.status(200).send(updatedUser)
    }catch(err){
        res.send(err.message)
    }
})
app.patch('/:id',async(req,res)=>{
    try{
        console.log(req.body)
        let updatedUser = await Users.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).send(updatedUser)
    }catch(err){
        res.send(err.message)
    }
})
app.put('/:id',async(req,res)=>{
    try{
        console.log(req.body)
        let updatedUser = await Users.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).send(updatedUser)
    }catch(err){
        res.send(err.message)
    }
})



module.exports = app