const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Author = new Schema({
    firstname: {
        type:String,
        require: true
    },
    lastname: {
        type:String,
        require: true
    },
    description: String
})

//create schema for book
const BookSchema = new Schema ({

    title: {
        type:String,
        require: true
    },
    ISBN: {
        type: String,
        required: true
    },
    description: String,
    crateDate: {
        type: Date,
        default: Date.now()
    },
    author: Author 
});

//create model for author
//const author = mongoose.model('author',Author);
//create model for book
const book = mongoose.model('books', BookSchema);

module.exports = book;