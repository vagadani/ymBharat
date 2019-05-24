var express = require('express');
var app = express();

app.use(function (req, res, next) {
    console.log(req.url)
    if (req.url.substr(-1) === '/') {
        return res.send({
            message: "Welcome!!"
        });
    }
    return res.send({
        message: "Welcome!!!!!"
    });
});


app.listen(process.env.PORT || 3000);
