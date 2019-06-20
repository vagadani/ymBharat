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

/*app.use(function (req, res) {
      res.writeHead(200, {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
      });

});*/

app.use('/v1', require('./routes'));
app.listen(process.env.PORT || portListen);

