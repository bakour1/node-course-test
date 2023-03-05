const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('IN THE MIDDLEWARE!');
  next(); // allows the request to continue to the next middleware in line
});
app.use((req, res, next) => {
  console.log('IN THE NEXT MIDDLEWARE!');
  res.send('<h1>hello world from Express</h1>');
});

const server = http.createServer(app);

server.listen(3000);
