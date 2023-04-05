const { productsModel } = require('../models/index');
const { validateNewProduct } = require('../validations.js/validation.create');
const { validationName } = require('../middlewares/product.validate');

const findAllProducts = async () => { 
  const result = await productsModel.findAllProducts();
  return { type: null, message: result };
};

const findAllProductsById = async (id) => {
  const results = await productsModel.findProductsById(id);
  if (!results) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  // console.log(results);
  return { type: null, message: results };
};

const createProduct = async (newProduct) => {
  // const error = validateNewProduct(name);
  // if (error.type) return error;

  // const newProductID = await productsModel.createProduct(name);
  // const newProduct = await productsModel.findProductsById(newProductID);

  // return { type: null, message: newProduct };
  const { name } = newProduct;
  const ResultRequired = validateNewProduct(name);

  if (ResultRequired.type) return ResultRequired;

  await productsModel.createProduct(newProduct);
  const product = await productsModel.findAllProducts();
  const ultimo = product[product.length - 1];

  return { type: null, message: ultimo };
};

const updateProduct = async (id, updateProducts) => {
  const { name } = updateProducts;
  const results = await productsModel.findProductsById(id);
  if (!results) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  const validateResultRequired = validationName.validateN(name);

  if (validateResultRequired.type) return validateResultRequired;

  await productsModel.updateProduct(id, name);

  const productsAtualized = await productsModel.findProductsById(id);

  return { type: null, message: productsAtualized };
};

const deleteProducts = async (id) => {
  const results = await productsModel.findProductsById(id);
  if (!results) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  await productsModel.deleteProducts(id);

  return { type: null, message: '' };
};

module.exports = {
  findAllProducts,
  findAllProductsById,
  createProduct,
  updateProduct,
  deleteProducts,
};