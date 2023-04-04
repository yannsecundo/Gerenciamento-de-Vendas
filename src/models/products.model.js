const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./connection');

const findAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return camelize(result);
};

const findProductsById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;',
    [id],
  );
  return camelize(result);
};

// const createProduct = async (products) => {
//   const collumns = Object.keys(snakeize(products)).join(', ');
//   const placeHolders = Object.keys(products).map((_key) => '?').join(', ');
//   const queryCreate = `INSERT INTO StoreManager.products (${collumns}) VALUES (${placeHolders})`;

//   const [{ insertId }] = await connection.execute(queryCreate);

//   return insertId;
// };

module.exports = {
  findAllProducts,
  findProductsById,
  // createProduct,
};