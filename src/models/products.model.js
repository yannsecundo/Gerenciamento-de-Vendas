const camelize = require('camelize');
const snakeize = require('snakeize');
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

const createProduct = async (products) => {
  const columns = Object.keys(snakeize(products)).join(', ');
  const placeholders = Object.keys(products).map((_key) => '?').join(', ');

    const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.products (${columns}) VALUE (${placeholders})`,
    [...Object.values(products)],
  );

  return insertId;
};

// const createProduct = (produto) => connection.execute(
//   'INSERT INTO StoreManager.products (name) VALUES (?);',
//   [produto.name],
// );

const updateProduct = (id, updateP) => connection.execute(
  `UPDATE StoreManager.products
   SET name = ?
   WHERE id = ?;`,
  [updateP, id],
);

const deleteProducts = (id) => connection.execute(
  'DELETE FROM StoreManager.products WHERE id = ?;',
  [id],
);

module.exports = {
  findAllProducts,
  findProductsById,
  createProduct,
  updateProduct,
  deleteProducts,
};