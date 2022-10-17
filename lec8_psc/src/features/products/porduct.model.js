const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            min:1
        },
        quantity:{
            type:Number,
            required:true,
            min:0
        }
    }, {
    versionKey: false,
    timestamps: true
}
);

const Product = mongoose.model("product", productSchema);

module.exports = Product