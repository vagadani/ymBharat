var Pool = require('pg').Pool,
    pool = require('../db/postgreSqlConnection'),
    db;

function RegistrationModel() {
    db = new Pool(pool);
}

RegistrationModel.prototype.create = function (req, callback) {
    db.query("INSERT INTO users (name,id,email,logintype,mobileno,fid) VALUES" + "(" + "'" + req.body.name + "','" + req.body.id + "','" + req.body.email + "','" + req.body.logintype + "','" + req.body.mobileno + "','" + req.body.fid + "')", function (err, dbData) {
        console.log("errrrrrrrrrrrrrrrr:",err, "dataaaaaaaaaaaaaa:",dbData);
        callback(err,{message:"Record inserted successfully!!!.Test"});
    })
};
module.exports = RegistrationModel;