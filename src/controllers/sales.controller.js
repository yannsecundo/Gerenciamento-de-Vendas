const { salesService } = require('../services/index');

const listSales = async (_req, res) => {
  const { type, message } = await salesService.findAllSales();

  if (type) return res.status(404).json(message);

  return res.status(200).json(message);
};

const listSalesById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.findAllSalesById(id);

  if (type) return res.status(404).json({ message });

  return res.status(200).json(message);
};

const deleteSales = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.deleteSales(id);

  if (type) return res.status(404).json({ message });

  res.status(204).end();
};

module.exports = {
  listSales,
  listSalesById,
  deleteSales,
};