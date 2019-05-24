var Pool = require('pg').Pool,
    pool = require('../db/postgreSqlConnection'),
    db;

function RegistrationModel() {
    db = new Pool(pool);
}

RegistrationModel.prototype.create = function (req, callback) {
    db.query("INSERT INTO users (name,username,password,email,logintype,fid,mobileno) VALUES" + "(" + "'" + req.body.name + "','" + req.body.username + "','" + req.body.password + "','" + req.body.email + "','" + req.body.logintype + "','" + req.body.fid + "','" + req.body.mobileno + "')", function (err, dbData) {
        //console.log(err, dbData);
        callback(err,{message:"Record Inserted successfully!!!"});
    })
};
module.exports = RegistrationModel;