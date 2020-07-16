var http = require("http");
var fs = require("fs");
var path =  require("path");
// var style = require("./assets/stylesheet/styles.css");


let server = http.createServer(handleRequest);

function handleRequest(req,res) {
    // console.log(req.url);
    // console.log(req.url.indexOf("jpeg"))
    // console.log(__dirname + '/stylesheet/styles.css');
     
    // console.log(req.url.includes('css'))
    
    if((req.url === '/' || req.url === '/index.html')  && req.method === 'GET'){
        res.setHeader('content-type','text/html');
        fs.createReadStream('./index.html').pipe(res);
       
    
    
    }
    
    else if(req.url === '/projects.html' && req.method === 'GET'){
            res.setHeader('content-type','text/html');
            fs.createReadStream('./projects.html').pipe(res);
      
        }
    else if(req.url === '/about.html' && req.method === 'GET'){
        res.setHeader('content-type','text/html');
        fs.createReadStream('./about.html').pipe(res);
    } 
    else if(req.url.includes('css')){
        res.setHeader('content-type','text/css');
        fs.createReadStream(__dirname +'/assets/stylesheet/styles.css').pipe(res);
    }else  if(req.url.includes("jpeg")){
            console.log(req.url)
            res.setHeader("content-type","image/jpeg");
            fs.createReadStream(__dirname + req.url).pipe(res);
        }
        else {
            res.writeHead(404,{"Content-Type":"text/html"})
        res.end("<h1>Page Not Found</h1>");
        }
    
    
            
    
        
       
    
}

server.listen(5000, () => console.log("server started"));
