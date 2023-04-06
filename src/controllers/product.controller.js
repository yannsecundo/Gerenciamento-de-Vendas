const { productsService } = require('../services/index');

const listProducts = async (req, res) => {
  const { type, message } = await productsService.findAllProducts();

  if (type) return res.status(404).json(message);

  return res.status(200).json(message);
};

const listById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findAllProductsById(id);

  if (type) return res.status(404).json({ message });

  return res.status(200).json(message);
};

const addProduct = async (req, res) => {
   console.log(req.body);
  const { name } = req.body;
  const { type, message } = await productsService.createProduct({ name });

  if (type) return res.status(404).json({ message });

  return res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productsService.updateProduct(id, { name });

  if (type === 'BAD_REQUEST') return res.status(400).json({ message });
  if (type === 'UNPROCESSABLE_ENTITY') return res.status(422).json({ message });
  if (type) return res.status(404).json({ message });  
  return res.status(200).json(message);
 };

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.deleteProducts(id);

  if (type) return res.status(404).json({ message });

  res.status(204).end();
};

module.exports = {
  listProducts,
  listById,
  addProduct,
  updateProduct,
  deleteProduct,
};