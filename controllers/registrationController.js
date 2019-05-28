var registrationModel = require('../models/registrationModel.js');
var rm;

function RegistrationController() {
    rm = new registrationModel();
}

RegistrationController.prototype.create = function (req, res) {
    console.log("Data from controller");

    rm.create(req, function (error, data) {
        if(error){
            res.status(200).json(error);

        }else {
            res.status(200).json(data);
        }

    })
}


module.exports = RegistrationController;