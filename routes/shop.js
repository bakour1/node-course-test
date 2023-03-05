const express = require('express');
const router = express.Router();

const path = require('path');
const rootDir = require('../util/path'); // for not use ../

router.get('/', (req, res, next) => {
  //   res.sendFile('../views/shop.html'); // this maby not work with all os for that we will use path for get root dir file
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
