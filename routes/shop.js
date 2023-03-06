const express = require('express');
const router = express.Router();
const adminData = require('./admin');

const path = require('path');
const rootDir = require('../util/path'); // for not use ../

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    docTitle: 'Shop',
    prods: products,
  });
});

module.exports = router;
