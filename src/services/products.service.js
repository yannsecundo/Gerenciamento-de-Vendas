const { productsModel } = require('../models/index');
const { validateNewProduct } = require('../validations.js/validation.create');

const findAllProducts = async () => { 
  const result = await productsModel.findAllProducts();
  return { type: null, message: result };
};

const findAllProductsById = async (idProduct) => {
  const result = await productsModel.findAllProductsById(idProduct);
  if (!idProduct) return { type: 'PRODUCT_NOT_FOUND', message: result };
};

const createProduct = async (name) => {
  const error = validateNewProduct(name);
  if (error.type) return error;

  const newProductID = await productsModel.createProduct(name);
  const newProduct = await productsModel.findProductsById(newProductID);

  return { type: null, message: newProduct };
};

module.exports = {
  findAllProducts,
  findAllProductsById,
  createProduct,
};