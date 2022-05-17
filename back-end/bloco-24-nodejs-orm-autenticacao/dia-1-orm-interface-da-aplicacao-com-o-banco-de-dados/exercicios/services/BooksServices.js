const { Book } = require('../models');

const getAll = async () => {
  const response = await Book.findAll();

  return response;
}

const getBookById = async (id) => {
  const response = await Book.findByPk(id);

  return response;
}

const createBook = async ({ title, author, pageQuantity }) => {
  const response = await Book.create({
    title,
    author,
    pageQuantity
  });

  return response;
}

const updateBook = async (id, { title, author, pageQuantity }) => {
  const response = await Book.update({ title, author, pageQuantity }, {
    where: {
      id
    }
  });

  return response;
}

module.exports = {
  getAll,
  getBookById,
  createBook,
  updateBook,
}
