var express = require('express');
var router = express.Router();

// Require controller modules
var bookController = require('../controllers/bookController');
var authorController = require('../controllers/authorController');
var genreController = require('../controllers/genreController');
var bookInstanceController = require('../controllers/bookInstanceController');
var recordsController = require('../controllers/recordsController');


/* GET catalog record counts. */
router.get('/recordCounts', recordsController.counts);

/// BOOK ROUTES ///

router.get('/books', bookController.bookList);

/* GET request for creating a Book. NOTE This must come before routes that display Book (uses id) */
//router.get('/book/create', book_controller.book_create_get);

/* POST request for creating Book. */
//router.post('/book/create', book_controller.book_create_post);

/* GET request to delete Book. */
//router.get('/book/:id/delete', book_controller.book_delete_get);

// POST request to delete Book
//router.post('/book/:id/delete', book_controller.book_delete_post);

/* GET request to update Book. */
//router.get('/book/:id/update', book_controller.book_update_get);

// POST request to update Book
//router.post('/book/:id/update', book_controller.book_update_post);

/* GET request for one Book. */
//router.get('/book/:id', book_controller.book_detail);

/// AUTHOR ROUTES ///

router.get('/authors', authorController.authorList);

/* GET request for creating Author. NOTE This must come before route for id (i.e. display author) */
//router.get('/author/create', author_controller.author_create_get);

/* POST request for creating Author. */
//router.post('/author/create', author_controller.author_create_post);

/* GET request to delete Author. */
//router.get('/author/:id/delete', author_controller.author_delete_get);

// POST request to delete Author
//router.post('/author/:id/delete', author_controller.author_delete_post);

/* GET request to update Author. */
//router.get('/author/:id/update', author_controller.author_update_get);

// POST request to update Author
//router.post('/author/:id/update', author_controller.author_update_post);

/* GET request for one Author. */
//router.get('/author/:id', author_controller.author_detail);


/// GENRE ROUTES ///

router.get('/genres', genreController.genreList);

/* GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id) */
//router.get('/genre/create', genre_controller.genre_create_get);

/* POST request for creating Genre. */
//router.post('/genre/create', genre_controller.genre_create_post);

/* GET request to delete Genre. */
//router.get('/genre/:id/delete', genre_controller.genre_delete_get);

// POST request to delete Genre
//router.post('/genre/:id/delete', genre_controller.genre_delete_post);

/* GET request to update Genre. */
//router.get('/genre/:id/update', genre_controller.genre_update_get);

// POST request to update Genre
//router.post('/genre/:id/update', genre_controller.genre_update_post);

/* GET request for one Genre. */
//router.get('/genre/:id', genre_controller.genre_detail);


/// BOOKINSTANCE ROUTES ///

router.get('/bookinstances', bookInstanceController.bookInstanceList);

/* GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id) */
//router.get('/bookinstance/create', book_instance_controller.bookinstance_create_get);

/* POST request for creating BookInstance. */
//router.post('/bookinstance/create', book_instance_controller.bookinstance_create_post);

/* GET request to delete BookInstance. */
//router.get('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_get);

// POST request to delete BookInstance
//router.post('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_post);

/* GET request to update BookInstance. */
//router.get('/bookinstance/:id/update', book_instance_controller.bookinstance_update_get);

// POST request to update BookInstance
//router.post('/bookinstance/:id/update', book_instance_controller.bookinstance_update_post);

/* GET request for one BookInstance. */
//router.get('/bookinstance/:id', book_instance_controller.bookinstance_detail);

module.exports = router;