const BooksService = require('../services/booksServices');

const getAll = async (req, res) => {
  const response = await BooksService.getAll();

  return res.status(200).json(response);
}

module.exports = {
  getAll,
}