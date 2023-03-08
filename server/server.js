const http = require("http");

const server = http.createServer((req, res) => {
    console.log("request event") // (2) logs to console 
    res.end("Hiya Georgie!") // (3) sends in browser
})

server.listen(5003, () => {
    console.log("Ain't ya gonna say hello??!") // (1)
})