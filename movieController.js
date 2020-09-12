Movie = require('./movieModel');

exports.index = function (req, res) {
    

    Movie.get(function (err, movie) {
        console.log(movie)
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Movie Successfully!",
            data: movie      
        });
    });
};

exports.add = function (req, res) {
    console.log(req.body? true : false)
    const movie = new Movie();
    movie.name = req.body.name? req.body.name: movie.name;
    movie.year = req.body.year;
    movie.gender = req.body.gender;
    movie.director = req.body.director;

    movie.save(function (err) {
        if (err)
            res.json(err);
            
        res.json({
            message: "New movie Added!",
            data: movie
        });
    });
};

exports.view = function (req, res) {
    Movie.findById(req.params.movie_id, function (err, movie) {
        if (err)
            res.send(err);
        res.json({
            message: 'Movie Details',
            data: movie
        });
    });
};

exports.update = function (req, res) {
    Movie.findById(req.params.movie_id, function (err, movie) {
        if (err)
            res.send(err);
        movie.name = req.body.name ? req.body.name : movie.name;
        movie.year = req.body.year;
        movie.gender = req.body.gender;
        movie.director = req.body.director;
        movie.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Movie Updated Successfully",
                data: movie
            });
        });
    });
};

exports.delete = function (req, res) {
    Movie.deleteOne({
        _id: req.params.movie_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Movie Deleted'
        })
    })
}