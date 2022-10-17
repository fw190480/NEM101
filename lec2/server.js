// import 
const http = require('http');
const db = require('./db.json')
const fs = require('fs');
console.log(db);

// create
const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.method=='GET'){
        if(req.url==='/'){
            res.write('<h1>I am on the Home page</h1>')
        }else if(req.url==='/user'){
            res.write(JSON.stringify(db.user))
        }else if(req.url==='/products'){
            res.write(JSON.stringify(db.products))
        }
    }else if(req.method==='POST'){
        if(req.url=='products'){
            db.products.push({product:'rahul',type:'ramesh'})
            res.write(JSON.stringify(db.products))
        }else if(req.url=='user'){
            db.user.push({product:'rahul',type:'ramesh'})
            res.write(JSON.stringify(db.products))
        }

        fs.writeFile('./db.json','utf-8',()=>{})
    }
    res.end('');
});

// listen or start
server.listen(8080,()=>{
    console.log("listening on http://localhost:8080")
})