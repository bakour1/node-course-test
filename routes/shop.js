const express = require('express');
const router = express.Router();
const adminData = require('./admin');

const path = require('path');
const rootDir = require('../util/path'); // for not use ../

router.get('/', (req, res, next) => {
  res.render('shop');
});

module.exports = router;
