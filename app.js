const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

// app.post('/product', (req, res, next) => {
app.get('/product', (req, res, next) => {
  console.log(req.body); // [Object: null prototype] { title: 'sss' }
  console.log(req.body.title); // entered text inside input form in title
  res.redirect('/');
});
app.use('/', (req, res, next) => {
  res.send('<h1>Page Home</h1>');
});

app.listen(3000);
