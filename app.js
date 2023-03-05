const http = require("http");


// create server takes a callback with 2 params: 
// you can name the params (objects) whatever but a common practice is req + res

// req ===> incoming request
// res ===> response of what is being sent back

const server = http.createServer((req, res) => {
    if(req.url === "/") {
    return    res.end("Welcome to my hompage")
    }
    if(req.url === "/about") {
    return    res.end("This here is the about page")
    }
    if(req.url === "/contact") {
    return    res.end("this is the about page matey")
    } else {
    return res.end(`
                <div>
                    <h2>Oops....page not found</h2>
                    <a href="/">Return to homepage</a>
                </div>
                    `)
    }
});

//server needs to listen to a port: (number is arbitrary for now)

server.listen(3001)

// log req obj = it's really big