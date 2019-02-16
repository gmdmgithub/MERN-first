const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Author = new Schema({
    firstname: String,
    lastname: String
})

//create schema for book
const BookSchema = new Schema ({

    title: String,
    ISBN: String,
    author: Author 
});

//create model for author
//const author = mongoose.model('author',Author);
//create model for book
const book = mongoose.model('book', BookSchema);

module.exports = book;