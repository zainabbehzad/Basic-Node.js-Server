const express = require('express');

const router = express.Router();

let books = [
  { id: 1, title: 'The Alchemist', author: 'Paulo Coelho' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];

router.get('/', (req, res) => {
  res.json(books);
});

router.post('/', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

router.put('/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const updatedBook = req.body;
  books = books.map(
    (book) => (book.id === bookId ? { ...book, ...updatedBook } : book)
  );
  res.json(updatedBook);
});

router.delete('/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  books = books.filter(
    (book) => book.id !== bookId
  );
  res.json({ message: 'Book deleted' });
});

module.exports = router;