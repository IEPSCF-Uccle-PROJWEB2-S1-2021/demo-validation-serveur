const express = require('express');
const router = new express.Router();

class Book {
  constructor(author, title, year) {
    this.author = author;
    this.title = title;
    this.year = year;
  }
}

const books = [
  new Book('Martin Fowler', 'UML Distilled', 1997),
  new Book('Martin Fowler and Kent Beck', 'Refactoring', 1999),
  new Book('Joshua Bloch', 'Effective Java', 2017),
  new Book('Robert C. Martin', 'Clean Code', 2009),
];

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('bookList', { title: 'Book list', books });
});

router.get('/new', (req, res, next) => {
  res.render('bookForm', { title: 'New Book' });
});

router.post('/new', (req, res, next) => {
  const book = new Book(req.body.author, req.body.title, req.body.year);
  books.push(book);
  res.redirect('/books');
});

module.exports = router;
