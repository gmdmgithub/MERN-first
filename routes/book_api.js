const express = require('express');
const router = express.Router();
const Book = require('../models/book');


// @route   GET api/books
// @desc    Get All Books
// @access  Public
router.get('/', (req, res, next) => {
    console.log('Getting the books list');

    Book.find({})
        .sort({ crateDate: -1 })
        .then(data => {
            //console.log('taking data from db %s', JSON.stringify(data,null,2));
            res.json(data)
        })
        .catch(next);
});

// @route   GET api/books/:id
// @desc    Get Book of id
// @access  Public
router.get('/:id', (req, res, next) => {
    console.log('Get the book');
    Book.findById({ "_id": req.params.id})
    .then(book => {res.json(book)})
    .catch(e=>res.status(404).json({ error:e, success: false }))
    // next();
});

// @route   POST api/books
// @desc    Create a book
// @access  Public
router.post('/', (req, res, next) => {

    //some static Book - for test
    // const book = new Book({
    //     title: 'Second addad from request',
    //     ISBN: 'AAA23324214',
    //     description: 'Some description AAA',
    //     author: {
    //         firstname: 'Stefan',
    //         lastname: 'Conner'
    //     }
    // })
    console.log('POST IS WORKING body: %s', req.body.title);
    
    console.log('POST IS WORKING body is: %s', JSON.stringify(req.body));

    const book = new Book({
        title: req.body.title,
        ISBN: req.body.ISBN,
        description: req.body.description,
        author: {
            firstname: req.body.author.firstname,
            lastname: req.body.author.lastname
        }
    }) 

    console.log('Create a book');

    book.save(book)
    .then(data => res.json(data))
    .catch(err => console.log(err))
    
});


router.delete('/:id', (req, res, next) => {
    console.log('delete a book');

    Book.findOneAndDelete({ "_id": req.params.id})
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false }));

    // alternative way - first find
    // Book.findById(req.params.id)
    // .then(book => book.remove().then(() => res.json({ success: true })))
    // .catch(err => {
    //     console.log(err);
    //     res.status(404).json({ success: false })
    // });

})


router.put('/:id', (req, res, next) => {
    console.log('update a book', req.body.title);
    // next();

    Book.updateOne({"_id":req.params.id}, 
        {$set: {
            title: req.body.title,
            ISBN: req.body.ISBN,
            description: req.body.description
            }
        })
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({error:err, success: false }));

    

})

module.exports = router;