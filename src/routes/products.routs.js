const express = require('express');
const productsController = require('../controllers/product.controller');
const { validateNameMid } = require('../middlewares/product.validate');

const router = express.Router();

router.get('/', validateNameMid, productsController.listProducts);
router.get('/:id', validateNameMid, productsController.listById);
router.post('/', validateNameMid, productsController.addProduct);
router.delete('/:id', validateNameMid, productsController.deleteProduct);
router.put('/:id', validateNameMid, productsController.updateProduct);

module.exports = router;