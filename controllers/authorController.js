var Author = require('../models/author');

//Display list of all Authors
exports.author_list = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Author list');
};

//Display detail page for specific author
exports.author_detail = function(res, req, next) {
    res.sent('NOT IMPLEMENTED: Author detail: ', req.params.id);
}

//Display Author create form on GET
exports.author_create_get = function(res, req, next) {
    res.sent('NOT IMPLEMENTED: Author create GET');
}

//Display Author create on POST
exports.author_create_post = function(res, req, next) {
    res.sent('NOT IMPLEMENTED: Author create POST');
}

//Display Author delete form on GET
exports.author_delete_get = function(res, req, next) {
    res.sent('NOT IMPLEMENTED: Author delete GET');
}

//Display Author delete on POST
exports.author_delete_post = function(res, req, next) {
    res.sent('NOT IMPLEMENTED: Author delete POST');
}

//Display Author update form on GET
exports.author_update_get = function(res, req, next) {
    res.sent('NOT IMPLEMENTED: Author update GET');
}

//Display Author update on POST
exports.author_update_post = function(res, req, next) {
    res.sent('NOT IMPLEMENTED: Author update POST');
}