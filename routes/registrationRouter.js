var express = require('express');
var router = express.Router();
var registrationController = require('../controllers/registrationController.js');
var rc = new registrationController();

router.post('/', rc.create.bind(rc));

module.exports = router;
