const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./connection');

const findAllSales = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales;',
  );
  return camelize(result);
};

const findSalesById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.sales WHERE id = ?;',
    [id],
  );
  return camelize(result);
};

module.exports = {
  findAllSales,
  findSalesById,
};