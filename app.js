const http = require('http');

const server = http.createServer((req, res, next) => {
  console.log(req);
});

server.listen(3000);
