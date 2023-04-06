const { salesModel } = require('../models/index');

const findAllSales = async () => { 
  const result = await salesModel.findAllSales();
  return { type: null, message: result };
};

const findAllSalesById = async (id) => {
  const results = await salesModel.findSalesById(id);
  if (!results) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  return { type: null, message: results };
};

// const updateSale = async (id, updateId, updateQuantity) => {
//   const results = await salesModel.findSalesById(id);
//   if (!results) return { type: 'SALES_NOT_FOUND', message: 'Sale not found' };

//   await salesModel.updateProduct(updateId, updateQuantity, id);

//   const salesAtualized = await salesModel.findSalesById(id);

//   return { type: null, message: salesAtualized };
// };

const deleteSales = async (id) => {
  const results = await salesModel.findSalesById(id);
  if (!results) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  await salesModel.deleteSales(id);

  return { type: null, message: '' };
};

module.exports = {
  findAllSales,
  findAllSalesById,
  // updateSale,
  deleteSales,
};