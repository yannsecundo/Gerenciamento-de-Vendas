const { nameSchema } = require('./schema');

const validateNewProduct = async (name) => {
  const { error } = nameSchema.validate({ name });

  if (error) return { type: 'INVALID_NAME', message: error.message };

  return { type: null, message: '' };
};

module.exports = {
validateNewProduct,
};