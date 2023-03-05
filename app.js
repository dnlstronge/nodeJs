const http = require("http");


// create server takes a callback with 2 params: 
// you can name the params (objects) whatever but a common practice is req + res

// req ===> incoming request
// res ===> response of what is being sent back

const server = http.createServer((req, res) => {
    console.log(req)
    res.write('welcome to my homepage')
    res.end()
});

//server needs to listen to a port: (number is arbitrary for now)

server.listen(3001)

// log req obj = it's really big