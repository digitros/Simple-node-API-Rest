const router = require('express').Router();
const movieController = require('./movieController');

router.get('/', function(req, res) {
    res.json({
        status: 'Success',
        message: 'Welcome to the Movie API'
    });
});

router.route('/movie')
    .get(movieController.index)
    .post(movieController.add);
router.route('/movie/:movie_id')
    .get(movieController.view)
    .patch(movieController.update)
    .put(movieController.update)
    .delete(movieController.delete);

module.exports = router;