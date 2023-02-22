const fs =require('fs')
const http = require('http')

const server =http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.readFile('index.html',(err,data)=>{
        if (err)
            throw err;
        res.write(data);
        res.end();
    });
});
server.listen(5000,()=>{
    console.log('App is running')
})