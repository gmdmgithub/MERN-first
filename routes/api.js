const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/library', {
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected to the database ...');

});

router.get('/books', (req, res, next) => {
    console.log('Getting the books list');

    Book.find({})
        .then(data => {
            console.log('taking data from db');
            res.json(data)
        })
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

    Book.findOneAndDelete({
            "_id": req.params.id
        })
        .then(data => res.json(data))
        .catch(next)

})

router.put('/books/:id', (req, res, next) => {
    console.log('update a book');

    next();

})

module.exports = router;