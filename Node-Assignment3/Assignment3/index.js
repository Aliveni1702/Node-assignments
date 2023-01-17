
let http = require("http");
let fs = require("fs");
let Name = process.argv[2]

fs.writeFile("index.html", `<h1> Hello World </h1>
<p> This is ${Name}... </p>`, (err) => {
    if (err) { console.log("error"); }
})

http.createServer((req, res) => {
    fs.readFile("index.html" , (err , data)=>{
        res.end(data)
    });
}).listen(5000);