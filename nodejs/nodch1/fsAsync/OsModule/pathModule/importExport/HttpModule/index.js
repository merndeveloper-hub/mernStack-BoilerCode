const http = require ('http');

const server = http.createServer((req, res) =>{
    if(req.url === "/"){
        res.end("Hello from the other sides owais");
    }
    else if(req.url === "/about"){
        res.end("Hello from the about sides owais");
    }else if(req.url === "/hello"){
        res.end("Hello from the hello us sides owais");
    }else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1> 404 Error Pages,Pages not found </h1>");
    }
   
   
})

server.listen(8000, "127.0.0.1", ()=> {
    console.log("listening to the port no 8000");
})