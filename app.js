var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var config = require('./config/config.json');
var portListen = config.listen;

app.use(bodyparser.json());
app.use(function (req, res, next) {
    console.log(req.url)
    if (req.url.substr(-1) === '/') {
        return res.send({
            message: "Welcome!!"
        });
    }
    next();
});

app.use(function (req, res) {
    /*  res.writeHead(200, {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
      });*/

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, HEAD");
    res.header("Access-Control-Expose-Headers", "X-TOTAL-COUNT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,X-TOTAL-COUNT, X-access-token");

});

app.use('/v1', require('./routes'));
app.listen(process.env.PORT || portListen);

