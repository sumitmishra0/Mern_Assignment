const http = require("http");
const fs = require ("fs")




const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        fs.readFile("../../db1.json","utf-8",(err,data)=>{
            data1 = data;
            res.end(data1)
        })
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("listning on 8000")
})