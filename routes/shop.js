const express = require('express');

const shopController = require('../controllers/products');

const router = express.Router();

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/products/:productId', shopController.getProduct);
router.get('/cart', shopController.getCart);
router.post('/add-to-cart', shopController.postCart);
router.get('/orders', shopController.getOrders);

module.exports = router;
