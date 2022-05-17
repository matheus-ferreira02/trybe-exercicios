const { Book } = require('../models');

const getAll = async () => {
  const response = await Book.findAll();

  return response;
}

const getBookById = async (id) => {
  const response = await Book.findByPk(id);

  return response;
}

module.exports = {
  getAll,
  getBookById,
}
