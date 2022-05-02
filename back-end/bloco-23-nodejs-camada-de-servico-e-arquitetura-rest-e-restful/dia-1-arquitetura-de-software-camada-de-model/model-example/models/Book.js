const connection = require('./connection');

const getByAuthorId = async (id) => {
  const [result] = await connection.execute(`SELECT * FROM model_example.books WHERE id = ${id}`);

  return result;
}

const getAll = async () => {
  const [results] = await connection.execute('SELECT * FROM model_example.books');

  return results;
}

const findById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id = ?';
  const [book] = await connection.execute(query, [id]);

  if (!book.length) return null;
  return book[0];
}

const createBook = async (title, authorId) => {
  const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)';

  await connection.execute(query, [title, authorId]);
}

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  createBook,
}
