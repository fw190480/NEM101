// const file = require('fs');
// file.readFile('./sample.txt',"utf-8",(err,data)=>{
//     console.log(data)
// })
// let post = require('./db.json')
// let data = post.posts.push('hi my name is rahul')
// file.writeFileSync('./db.json',JSON.stringify(data))

const fs = require('fs');
// // console.log(fs);
// fs.readFile('./sample.txt',"utf-8",(err,data)=>{
//     console.log(data)
// })

const x = fs.readFileSync('./sample.txt',"utf-8")
console.log(x)