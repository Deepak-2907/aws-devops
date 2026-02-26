const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end("Server is working properly!");
});

server.listen(3000, () => {
    console.log("Server started on port 3000");
});