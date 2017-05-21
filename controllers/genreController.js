var Genre = require('../models/genre');
var Book = require('../models/book');
var async = require('async');

// Respond w/ list of all Genres
exports.genreList = function(req, res, next) {

    Genre.find()
        .sort([['name', 'ascending']])
        .exec(function(err, genreList) {
            if (err) {  return next(err) }
            //Successful, so respond
            res.json(genreList);
        });
};

// Respond w/ detail for a specific genre
exports.genreDetail = function(req, res, next) {
    
    async.parallel({
        genre: function(callback) {
            Genre.findById(req.params.id)
                .exec(callback);
        },
        books: function(callback) {
            Book.find({ 'genre': req.params.id })
                .exec(callback);
        }
    }, function(err, results) {
        if (err) { return next(err); }
        //Successful, so render
        res.json(results);
    });

};

// Display Genre create form on GET
exports.genre_create_get = function(req, res, next) {
    res.render('genre_form', { title: 'Create Genre' });
};

// Handle Genre create on POST
exports.genre_create_post = function(req, res, next) {
    // Check that the name field is not empty
    req.checkBody('name', 'Genre name required').notEmpty();

    // Trim and escape the name field
    req.sanitize('name').escape();
    req.sanitize('name').trim();

    // Run the validators
    var errors = req.validationErrors();

    // Create a genre object with escaped and trimmed data
    var genre = new Genre({ 
        name: req.body.name 
    });

    if (errors) {
        // If there are errors, render the form again, passing the previously entered values and errors
        res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors });
        return;
    }
    else {
        // Data from form is valid
        // Check if Genre with same name already exists
        Genre.findOne({ 'name': req.body.name})
            .exec( function(err, found_genre) {
                console.log('found_genre: ' + found_genre);
                if (err) { return next(err); }

                if (found_genre) {
                    // Genre exists, redirect to its detail page
                    res.redirect(found_genre.url);
                }
                else {
                    genre.save(function(err) {
                        if (err) { return next(err); }
                        // Genre saved, redirect to genre detail page
                        res.redirect(genre.url);
                    });
                }
            });
    }
};

// Display Genre delete form on GET
exports.genre_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST
exports.genre_delete_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET
exports.genre_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST
exports.genre_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Genre update POST');
};