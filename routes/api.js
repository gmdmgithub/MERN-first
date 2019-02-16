const express = require('express');
const router = express.Router();
const Book = require('./models/book');

router.get('/books', (req, res, next) => {
    console.log('Getting the books list');

    Book.find({})
    .then(data => res.json(data))
    .catch(next);
});
router.get('/books/:id', (req, res, next) => {
    console.log('Get the book');
    next();
});
router.post('/books', (req, res, next) => {
    console.log('Create a book');

    next();
});
router.delete('/books/:id', (req, res, next) => {
    console.log('delete a book');

    Book.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)

})

router.put('/books/:id', (req, res, next) => {
    console.log('update a book');

    next();

})

module.exports = router;