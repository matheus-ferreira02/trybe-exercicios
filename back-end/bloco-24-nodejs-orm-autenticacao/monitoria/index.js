const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const booksController = require('./controllers/booksController');

app.use(express.json());

app.get('/books', booksController.getAll);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));