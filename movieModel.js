const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
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