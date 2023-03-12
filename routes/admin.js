const express = require('express');

const router = express.Router();
const adminController = require('../controllers/admin');

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// /admin/edit-product => GET
router.get('/edit-product/:productId', adminController.getEditProduct);

// /admin/add-product => GET
router.get('/admin-products', adminController.getProducts);

// /admin/add-product => GET
router.post('/edit-product', adminController.postEditProduct);

module.exports = router;
