var registrationModel = require('../models/registrationModel.js');
var rm;
var jwt = require('jsonwebtoken');
var config = require('../config/config');

function RegistrationController() {
    rm = new registrationModel();
}

RegistrationController.prototype.create = function (req, res) {
    console.log("Data from controller");
    var jwtSecretKey = config["jwt-secret-key"];
    var token;

    rm.create(req, function (error, data) {
        if (error) {
            res.status(200).json(error);
        } else {
            token = jwt.sign(data, jwtSecretKey, {expiresIn: '1h'});
            res.status(200).json(token);
        }
    });
}


module.exports = RegistrationController;