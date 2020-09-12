const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    year: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    director: {
        type: String,
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Movie = module.exports = mongoose.model('movie', movieSchema);
module.exports.get = function (callback, limit) {
   Movie.find(callback).limit(limit); 
}