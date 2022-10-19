const mongoose = require('mongoose');
const URL = process.env.URL;

const connect = async()=>{
    return mongoose.connect(URL)
}

module.exports = connect;