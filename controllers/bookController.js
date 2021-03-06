var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

var async = require('async');

// Respond w/ list of all books
exports.bookList = function(req, res, next) {
    
    Book.find({}, 'title author')
        .populate('author')
        .exec(function(err, bookList) {
            if (err) { return next(err); }
            //Successful, so respond
            res.json(bookList);
        });
    
};

// Respond w/ detail for a specific book
exports.bookDetail = function(req, res, next) {

    async.parallel({
        book: function(callback) {
            Book.findById(req.params.id)
                .populate('author')
                .populate('genre')
                .exec(callback)
        },
        instances: function(callback) {
            BookInstance.find({ 'book': req.params.id })
                .exec(callback)               
        }
    }, function(err, results) {
        if (err) { return next(err); }
        // Successful, so render
        res.json(results);
    });

};

// Display book create form on GET
exports.book_create_get = function(req, res, next) {
    
    //Get all authors and genres, which we can use for adding to our book

    async.parallel({
        authors: function(callback) {
            Author.find(callback);
        },
        genres: function(callback) {
            Genre.find(callback);
        }
    }, function(err, results) {
        if (err) { return next(err); }
        res.render('book_form', { title: 'Create Book', authors: results.authors, genres: results.genres });
    });

};

// Handle book create on POST
exports.book_create_post = function(req, res, next) {

    req.checkBody('title', 'Title must not be empty.').notEmpty();
    req.checkBody('author', 'Author must not be empty').notEmpty();
    req.checkBody('summary', 'Summary must not be empty').notEmpty();
    req.checkBody('isbn', 'ISBN must not be empty').notEmpty();

    req.sanitize('title').escape();
    req.sanitize('author').escape();
    req.sanitize('summary').escape();
    req.sanitize('isbn').escape();
    req.sanitize('title').trim();     
    req.sanitize('author').trim();
    req.sanitize('summary').trim();
    req.sanitize('isbn').trim();
    req.sanitize('genre').escape();

    var book = new Book({
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
        isbn: req.body.isbn,
        genre: (typeof req.body.genre==='undefined') ? [] : req.body.genre.split(',')
    })

    var errors = req.validationErrors();

    if (errors) {

        async.parallel({
            authors: function(callback) {
                Author.find(callback);
            },
            genres: function(callback) {
                Genre.find(callback);
            }
        }, function(err, results) {
            if (err) { return next(err); }

            // Mark our selected genres as checked
            for (var i = 0; i < results.genres.length; i++) {
                if (book.genre.indexOf(results.genres[i]._id) > -1) {
                    // Current genre is selected.  Set 'checked' flag.
                    results.genres[i].checked='true';
                }
            }
            
            res.render('book_form', { title: 'Create Book', authors: results.authors, genres: results.genres, book: book, errors: errors});            
        })
    }
    else {
        // Form data is valid
        book.save(function(err) {
            if (err) { return next(err); }
            res.redirect(book.url);
        });
    }

};

// Display book delete form on GET
exports.book_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST
exports.book_delete_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET
exports.book_update_get = function(req, res, next) {

    req.sanitize('id').escape();
    req.sanitize('id').trim();

    // Get book, authors, and genres for form
    async.parallel({
        book: function(callback) {
            Book.findById(req.params.id).populate('author').populate('genre').exec(callback);
        },
        authors: function(callback) {
            Author.find(callback);
        },
        genres: function(callback) {
            Genre.find(callback);
        }
    }, function(err, results) {
        if (err) { return next(err); }

        // Mark our selected genres as checked
        for (var i = 0; i < results.genres.length; i++) {
            for (var j = 0; j < results.book.genre.length; j++) {
                if (results.genres[i]._id.toString() == results.book.genre[j]._id.toString()) {
                    results.genres[i].checked = true;
                }
            }
        }
        res.render('book_form', { title: 'Update Book', authors: results.authors, book: results.book, genres: results.genres });
    });

};

// Handle book update on POST
exports.book_update_post = function(req, res, next) {
    // Sanitize id passed in
    req.sanitize('id').escape();
    req.sanitize('id').trim();

    // Check other data
    req.checkBody('title', 'Title must not be empty.').notEmpty();
    req.checkBody('author', 'Author must not be empty').notEmpty();
    req.checkBody('summary', 'Summary must not be empty').notEmpty();
    req.checkBody('isbn', 'ISBN must not be empty').notEmpty();
    
    req.sanitize('title').escape();
    req.sanitize('author').escape();
    req.sanitize('summary').escape();
    req.sanitize('isbn').escape();
    req.sanitize('title').trim();
    req.sanitize('author').trim(); 
    req.sanitize('summary').trim();
    req.sanitize('isbn').trim();
    req.sanitize('genre').escape();

    var book = new Book({
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
        isbn: req.body.isbn,
        genre: (typeof req.body.genre === 'undefined') ? [] : req.body.genre.split(','),
        _id: req.params.id // required, or a new ID will be assigned
    });

    var errors = req.validationErrors();
    if (errors) {
        // re-render book w/ error info
        // get all authors and genres for form
        async.parallel({
            authors: function(callback) {
                Author.find(callback);
            },
            genres: function(callback) {
                Genre.find(callback);
            }
        }, function(err, results) {
            if (err) { return next(err); }

            // mark selected genres as checked
            for (i = 0; i < results.genres.length; i++) {
                if (book.genre.indexOf(results.genres[i]._id) > -1) {
                    results.genres[i].checked = 'true';
                }
            }
            res.render('book_form', { title: 'Update Book', authors: results.authors, book: book, genres: results.genres, errors: errors });
        })
    }
    else {
        // data from form is valid, update the record
        Book.findByIdAndUpdate(req.params.id, book, {}, function(err, thebook) {
            if (err) { return next(err); }
            // successful - redirect to book detail page
            res.redirect(thebook.url);
        });
    }
};