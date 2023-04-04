const { productsModel } = require('../models/index');
// const { validateNewProduct } = require('../validations.js/validation.create');

const findAllProducts = async () => { 
  const result = await productsModel.findAllProducts();
  return { type: null, message: result };
};

const findAllProductsById = async (id) => {
  const results = await productsModel.findProductsById(id);
  if (!results) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  console.log(results);
  return { type: null, message: results };
};

// const createProduct = async (name) => {
//   const error = validateNewProduct(name);
//   if (error.type) return error;

//   const newProductID = await productsModel.createProduct(name);
//   const newProduct = await productsModel.findProductsById(newProductID);

//   return { type: null, message: newProduct };
// };

module.exports = {
  findAllProducts,
  findAllProductsById,
  // createProduct,
};