const { Books } = require('../models');

const getAll = async () => {
  const response = await Books.findAll();

  return response.status(200).json(response);
}

module.exports = {
  getAll,
}
