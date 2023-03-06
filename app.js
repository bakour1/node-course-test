const express = require('express');
const path = require('path');

const adminData = require('./routes/admin');
const shopData = require('./routes/shop');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false })); // for parse req.body object
app.use(express.static(path.join(__dirname, 'public'))); // for set public ref folder for style and vanilla js

app.use('/admin', adminData.routes);
app.use(shopData);

// handle 404 page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
