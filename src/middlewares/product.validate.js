const validateN = (name) => {
  if (!name) return { type: 'BAD_REQUEST', message: '"name" is required' };
  if (name.length < 5) {
    return {
      type: 'UNPROCESSABLE_ENTITY',
      message: '"name" length must be at least 5 characters long',
    };
  }

  return { type: null, message: '' };
};

const validateNameMid = async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
 return res.status(400).json({ message: '"name" is required' }); 
}
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

module.exports = { validateN, validateNameMid };