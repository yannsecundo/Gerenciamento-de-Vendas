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

module.exports = {
  findAllSales,
  findAllSalesById,
};