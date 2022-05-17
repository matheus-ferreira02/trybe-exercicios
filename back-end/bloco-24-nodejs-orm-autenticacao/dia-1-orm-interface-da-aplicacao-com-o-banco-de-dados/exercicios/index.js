const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const BooksRouter = require('./routes/booksRouter');

app.use(express.json());

app.use('/books', BooksRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));