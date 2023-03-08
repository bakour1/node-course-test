const express = require('express');

const shopController = require('../controllers/products');

const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/cart', shopController.getCart);
router.get('/order', shopController.getOrder);

module.exports = router;
