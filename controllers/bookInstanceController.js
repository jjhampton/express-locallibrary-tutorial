var BookInstance = require('../models/bookinstance');
var Book = require('../models/book');

// Respond w/ list of all BookInstances
exports.bookInstanceList = function(req, res, next) {

  BookInstance.find()
    .populate('book')
    .exec(function (err, bookInstanceList) {
      if (err) { return next(err); }
      //Successful, so respond
      res.json(bookInstanceList);
    });
    
};

// Respond w/ details for a specific book instance

exports.bookInstanceDetail = function(req, res, next) {
    
    BookInstance.findById(req.params.id)
        .populate('book')
        .exec(function(err, bookInstance) {
            if(err) { return next(err); }
            res.json(bookInstance);
        });
};

// Display BookInstance create form on GET
exports.bookinstance_create_get = function(req, res, next) {
    
    Book.find({}, 'title')
        .exec(function(err, books) {
            if (err) { return next(err); }
            res.render('bookinstance_form', { title: 'Create Book Instance', book_list: books });
        });
};

// Handle BookInstance create on POST
exports.bookinstance_create_post = function(req, res, next) {
    
    req.checkBody('book', 'Book must be specified').notEmpty(); //We won't force Alphanumeric, because book titles might have spaces.
    req.checkBody('imprint', 'Imprint must be specified').notEmpty();
    req.checkBody('due_back', 'Invalid date').optional({ checkFalsy: true }).isDate();

    req.sanitize('book').escape();
    req.sanitize('imprint').escape();
    req.sanitize('status').escape();
    req.sanitize('book').trim();
    req.sanitize('imprint').trim();   
    req.sanitize('status').trim();
    req.sanitize('due_back').toDate();

    var bookinstance = new BookInstance({
        book: req.body.book,
        imprint: req.body.imprint,
        status: req.body.status,
        due_back: req.body.due_back
    });

    var errors = req.validationErrors();
    if (errors) {
        Book.find({}, 'title')
            .exec(function(err, books) {
                if (err) { return next(err); }
                res.render('bookinstance_form', { title: 'Create Book Instance', book_list: books });
            });
        return;
    }
    else {
        bookinstance.save(function(err) {
            if(err) { return next(err); }
            res.redirect(bookinstance.url);
        });
    }

};

// Display BookInstance delete form on GET
exports.bookinstance_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

// Handle BookInstance delete on POST
exports.bookinstance_delete_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display BookInstance update form on GET
exports.bookinstance_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST
exports.bookinstance_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};