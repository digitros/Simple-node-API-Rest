const router = require('express').Router();

router.get('/', function(req, res) {
    res.json({
        status: 'Succesfull',
        message: 'Welcome to the API'
    });
});

module.exports = router;