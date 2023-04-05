const express = require('express');
const productsController = require('../controllers/product.controller');

const router = express.Router();

router.get('/', productsController.listProducts);
router.get('/:id', productsController.listById);
router.post('/', productsController.addProduct);
router.delete('/:id', productsController.deleteProduct);
router.put('/:id', productsController.updateProduct);

module.exports = router;