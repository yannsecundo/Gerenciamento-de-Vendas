const express = require('express');
const salesController = require('../controllers/sales.controller');

const router = express.Router();

router.get('/', salesController.listSales);
router.get('/:id', salesController.listSalesById);
// router.post('/', productsController.addProduct);

module.exports = router;