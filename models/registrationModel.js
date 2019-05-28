var Pool = require('pg').Pool,
    pool = require('../db/postgreSqlConnection'),
    db;

function RegistrationModel() {
    db = new Pool(pool);
}

/*RegistrationModel.prototype.create = function (req, callback) {
    db.query("INSERT INTO users (name,id,email,logintype,mobileno,fid) VALUES" + "(" + "'" + req.body.name + "','" + req.body.id + "','" + req.body.email + "','" + req.body.logintype + "','" + req.body.mobileno + "','" + req.body.fid + "')", function (err, dbData) {
        console.log("errrrrrrrrrrrrrrrr:",err, "dataaaaaaaaaaaaaa:",dbData);
        callback(err,{message:"Record inserted successfully!!!"});
    });

};*/


RegistrationModel.prototype.create = function (req, callback) {
    var self = this, userData, updateEmail, updateMobile, updateEmailMobile = 'update users set', updateData;

    var obj = {
        id: req.body.id,
        username: req.body.name,
        name: req.body.name,
        email: req.body.email,
        logintype: req.body.logintype,
        mobileno: req.body.mobileno,
        fid: req.body.fid
    };

    if (obj.fid || obj.gid) {
        db.query("select * from users where fid =" + "'" + obj.fid + "'or gid ='" + obj.gid + "'", function (err, dbData) {
            if (err) {
                console.log("errrrrrrrrrrrrr")
                return callback(err, null);
            } else if (dbData.rows.length > 0) {
                if (obj.email && (obj.email !== dbData.rows[0].email)) {
                    updateEmailMobile = updateEmailMobile + " email='" + obj.email + "'" + " where gid=" + "'" + obj.gid + "' or fid=" + "'" + obj.fid + "'"
                }
                if (obj.mobileno && (obj.mobileno !== dbData.rows[0].mobileno)) {
                    console.log('mooooooooooooooo')
                    updateEmailMobile = updateEmailMobile + " mobileno='" + obj.mobileno + "'" + " where gid=" + "'" + obj.gid + "' or fid=" + "'" + obj.fid + "'"
                }
                if ((obj.email && (obj.email !== dbData.rows[0].email)) && (obj.mobileno && (obj.mobileno !== dbData.rows[0].mobileno))) {
                    db.query("update users set email=" + "'" + obj.email + "'," + "mobileno=" + "'" + obj.mobileno + "'" + " where gid=" + "'" + obj.gid + "' or fid=" + "'" + obj.fid + "'", function (err) {
                        if (err) {
                            return callback(err, null);
                        }
                    });
                } else if ((obj.email !== dbData.rows[0].email) || (obj.mobileno !== dbData.rows[0].mobileno)) {
                    db.query(updateEmailMobile, function (err) {
                        if (err) {
                            return callback(err, null);
                        }
                    });
                }
                console.log('e&m Same');
                return self.sigIn(obj, callback);
            }
            if (obj.email) {
                return self.checkEmail(obj, callback)
            }
            if (obj.mobileno) {
                return self.checkMobile(obj, callback)
            }
        });
    } else {
        callback({message: 'something went wrong please Try again later'}, null)
    }
}

RegistrationModel.prototype.checkEmail = function (obj, cb) {
    var self = this;
    db.query("select * from users where email=" + "'" + obj.email + "'", function (err, dbData) {
        if (err) {
            console.log('emailerrr');
            cb(err, null);
        } else if (dbData.rows.length > 0) {
            cb(null, {message: 'you have registered with ' + dbData.rows[0].logintype + '. please login with' + dbData.rows[0].logintype})
        } else {
            if (obj.mobileno) {
                self.checkMobile(obj, cb)
            } else {
                self.signUp(obj, cb)
            }
        }
    });
}
RegistrationModel.prototype.checkMobile = function (obj, cb) {
    var self = this;

    db.query("select * from users where mobileno=" + "'" + obj.mobileno + "'", function (err, dbData) {
        if (err) {
            cb(err, null);
        } else if (dbData.rows.length > 0) {
            cb(null, {message: 'you have registered with ' + dbData.rows[0].logintype + '. please login with' + dbData.rows[0].logintype})
        } else {
            self.signUp(obj, cb)
        }
    });
}

RegistrationModel.prototype.sigIn = function (obj, callback) {
    callback(null, {message: "Login Success!"});
}

RegistrationModel.prototype.signUp = function (obj, callback) {
    var self=this;
    db.query("INSERT INTO users (name,id,email,logintype,mobileno,fid) VALUES" + "(" + "'" + req.body.name + "','" + req.body.id + "','" + req.body.email + "','" + req.body.logintype + "','" + req.body.mobileno + "','" + req.body.fid + "')", function (err, dbData) {
        if (err){
            callback(err,null);
        }else {
            self.sigIn(obj,callback)
        }
        //console.log("errrrrrrrrrrrrrrrr:",err, "dataaaaaaaaaaaaaa:",dbData);

    });
}


module.exports = RegistrationModel;