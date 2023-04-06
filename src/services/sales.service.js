const { salesModel } = require('../models/index');

const findAllSales = async () => { 
  const result = await salesModel.findAllSales();
  return { type: null, message: result };
};

const findAllSalesById = async (id) => {
  const results = await salesModel.findSalesById(id);
  console.log(results);
  if (!results || !results.length) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  return { type: null, message: results };
};

const deleteSales = async (id) => {
  const results = await salesModel.findSalesById(id);
  if (!results) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  await salesModel.deleteSales(id);

  return { type: null, message: '' };
};

module.exports = {
  findAllSales,
  findAllSalesById,
  deleteSales,
};