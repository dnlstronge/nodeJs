const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    res.end("Wilkommen")
});

server.listen(5007)