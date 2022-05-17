const { Book } = require('../models');

const getAll = async () => {
  const response = await Book.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    }
  });

  return response;
}

module.exports = {
  getAll,
}