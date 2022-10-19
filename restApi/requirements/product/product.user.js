const express = require('express');
const Product = require('./product.modal');

const app = express.Router();

app.use(express.json())

app.get('/',async(req,res)=>{
    try{
        const allProduct = await Product.find();
        if(!allProduct.length){
           return res.status.send('Empty')
        }
        res.status(200).send(allProduct)

    }catch(err){
        res.send(err.message)
    }
})

app.get('/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        const product = await Product.findById(id);
        // console.log(product)
        res.send(product)
    }catch(err){
        res.send(err.message)
    }
})

app.post('/',async(req,res)=>{
    try{
        let newProduct = await Product.create(req.body)
        res.send(newProduct)
    }catch(errr){
        res.send(errr.message)
    }
})

module.exports = app;