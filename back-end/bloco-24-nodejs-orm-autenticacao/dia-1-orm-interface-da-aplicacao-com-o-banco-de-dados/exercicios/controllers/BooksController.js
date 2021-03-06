const BooksServices = require('../services/BooksServices');

const getAll = async (_req, res) => {
  const response = await BooksServices.getAll();

  return res.status(200).json(response);
};

const getBookById = async (req, res) => {
  const { id } = req.params;

  const response = await BooksServices.getBookById(id);

  return res.status(200).json(response);
}

const createBook = async (req, res) => {
  const response = await BooksServices.createBook(req.body);

  return res.status(200).json(response);
}

const updateBook = async (req, res) => {
  const { id } = req.params;
  const response = await BooksServices.updateBook(id, req.body);

  return res.status(200).json(response);
}

const deleteBook = async (req, res) => {
  const { id } = req.params;

  const response = await BooksServices.deleteBook(id);

  return res.status(200).json(response);
}

module.exports = {
  getAll,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
}
