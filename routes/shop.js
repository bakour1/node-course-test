const express = require('express');
const router = express.Router();
const adminData = require('./admin');

const path = require('path');
const rootDir = require('../util/path'); // for not use ../

router.get('/', (req, res, next) => {
  //   res.sendFile('../views/shop.html'); // this maby not work with all os for that we will use path for get root dir file
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = adminData.products;
  console.log('####shop.js__12', products);
});

module.exports = router;
