const express = require('express');
const router = express.Router();
const products = [];

const path = require('path');
const rootDir = require('../util/path'); // for not use ../

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  console.log('####admin.js__17', products);
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
