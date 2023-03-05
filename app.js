const http = require("http");


// create server takes a callback with 2 params: 
// you can name the params (objects) whatever but a common practice is req + res

// req ===> incoming request
// res ===> response of what is being sent back

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.end("Welcome to my hompage")
    }
    if(req.url === "/about") {
        res.end("This here is the about page")
    }
    if(req.url === "/contact") {
        res.end("this is the about page matey")
    }
    res.end(
        <section>
            <h3>404 Error</h3>
            <div>The page does not exist</div>
       </section>
    )
   
});

//server needs to listen to a port: (number is arbitrary for now)

server.listen(3001)

// log req obj = it's really big