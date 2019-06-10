var jwt = require('jsonwebtoken');
var config = require('../config/config.json');

var middlewareAuth = function (req, res, next) {
    var encryptedToken = req.headers['x-access-token'];
    var jwtSecretKey = config["jwt-secret-key"];
    var cryptoSecretKey = config["crypto-secret-key"];
    var token;
    // console.log(req.headers);
    if (encryptedToken) {
        //token  = CryptoJS.AES.decrypt(encryptedToken, cryptoSecretKey).toString(CryptoJS.enc.Utf8);

        jwt.verify(encryptedToken, jwtSecretKey, function (err, decode) {
            if (err) {
                res.status(400).json({message: "Invalid Token!"});
            } else {
                console.log(err, decode);
                req.decodedData = decode;
                next()
            }
        })
    } else {
        return res.status(400).json({message: 'No Token Provided!'})
    }
}

module.exports = middlewareAuth;