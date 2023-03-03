const http = require('http');

const server = http.createServer((req, res, next) => {
  console.log(req);
  process.exit(); // stop event loop
});

server.listen(3000);
