const BooksController = require('../controllers/BooksController');
const router = require('express').Router();

router.get('/', BooksController.getAll);

router.get('/:id', BooksController.getBookById);

module.exports = router;
