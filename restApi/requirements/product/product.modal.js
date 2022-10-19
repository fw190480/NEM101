const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    rate: {
        type: Number,
        required: true,
        min: 1
    },
    quantity: {
        type: Number,
        min: 0,
        required: true
    }
})

const Product = mongoose.model('product',productSchema);
module.exports = Product