/*var registrationModel = require('../models/registrationModel.js');
var rm;*/

function RegistrationController() {
   // rm = new registrationModel();
}

RegistrationController.prototype.create = function (req, res) {
    res.status(200).json({message:"Data from controller"});
   /* rm.create(req, function (error, data) {
        res.status(200).json(data);
    })*/
}


module.exports = RegistrationController;