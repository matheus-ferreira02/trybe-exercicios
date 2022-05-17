const BooksController = require('../controllers/BooksController');
const router = require('express').Router();

router.get('/', BooksController.getAll);

module.exports = router;
