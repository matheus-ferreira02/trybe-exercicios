const BooksController = require('../controllers/BooksController');
const router = require('express').Router();

router.get('/', BooksController.getAll);

router.get('/:id', BooksController.getBookById);

router.post('/', BooksController.createBook);

module.exports = router;
