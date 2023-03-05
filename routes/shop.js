const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/', (req, res, next) => {
  //   res.sendFile('../views/shop.html'); // this maby not work with all os for that we will use path for get root dir file
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;
