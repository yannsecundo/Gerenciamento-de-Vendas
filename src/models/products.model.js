const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connections');

const findAllProducts = async () => {
  const queryFind = 'SELECT * FROM products';
  const [result] = await connection.execute(queryFind);
  return camelize(result);
};

const findProductsById = async (idProduct) => {
  const queryFindId = 'SELECT * FROM products WHERE id =?';
  const [result] = await connection.execute(queryFindId, [idProduct]);
  return camelize(result);
};

const createProduct = async (products) => {
  const collumns = Object.keys(snakeize(products)).join(', ');
  const placeHolders = Object.keys(products).map((_key) => '?').join(', ');
  const queryCreate = `INSERT INTO products (${collumns}) VALUES (${placeHolders})`;

  const [{ insertId }] = await connection.execute(queryCreate);

  return insertId;
};

module.exports = {
  findAllProducts,
  findProductsById,
  createProduct,
};