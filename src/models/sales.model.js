// const camelize = require('camelize');
// const snakeize = require('snakeize');
// const { query } = require('./connection');
const connection = require('./connection');

const findAllSales = async () => {
  const [allDates] = await connection.execute('SELECT * FROM StoreManager.sales');
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales_products ORDER BY sale_id ASC, product_id ASC ;',
  );
  
  return result.map((e) => ({
    saleId: e.sale_id,
    productId: e.product_id,
    quantity: e.quantity,
    date: allDates[e.sale_id - 1].date,
  }));
};

const findSalesById = async (id) => {
  const [allDates] = await connection.execute('SELECT * FROM StoreManager.sales');
  const [result] = await connection.execute(
    `SELECT * FROM StoreManager.sales_products 
    WHERE sale_id = ?
    ORDER BY sale_id ASC, product_id ASC `,
    [id],
  );
    return result.map((e) => ({
    date: allDates[e.sale_id - 1].date,
    productId: e.product_id,
    quantity: e.quantity,
  }));
};

const deleteSales = (id) => connection.execute(
  'DELETE FROM StoreManager.sales WHERE id = ?;',
  [id],
);

module.exports = {
  findAllSales,
  findSalesById,
  deleteSales,
};