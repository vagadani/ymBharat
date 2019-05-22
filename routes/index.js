var express = require('express')
var router = express.Router();

router.get('/', function (req, res) {
    res.send("This is YMB version one");
})
router.use('/registration', require('./registrationRouter'));


module.exports = router;