const { productsService } = require('../services/products.service');

const listProducts = async (_req, res) => {
  const { type, message } = await productsService.findAllProducts();

  if (type) return res.status(404).json(message);

  return res.status(200).json(message);
};

const listById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findAllProductsById(id);

  if (type) return res.status(404).json(message);

  return res.status(200).json(message);
};

const addProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.createProduct(name);

  if (type) return res.status(404).json(message);

  return res.status(201).json(message);
};

module.exports = {
  listProducts,
  listById,
  addProduct,
};