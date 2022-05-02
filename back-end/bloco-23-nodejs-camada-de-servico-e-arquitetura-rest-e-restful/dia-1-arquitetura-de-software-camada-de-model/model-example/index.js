const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/author', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books/search', async (req, res) => {
  const { q } = req.query;
  const books = await Book.getByAuthorId(q);

  res.status(200).json(books);
});

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!book) return res.status(404).json({ message: 'Not Found' });

  res.status(200).json(book);
});

app.post('/createBook', (req, res) => {
  const { title, authorId } = req.body;

  Book.createBook(title, authorId);

  res.status(201).send('Livro cadastrado');
})

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
