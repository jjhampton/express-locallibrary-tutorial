var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
    name: { type: String, required: true, min: 3, max: 100 }
}, {
    toJSON: {
        virtuals: true 
    }
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);