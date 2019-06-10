var homepageVideosModel=require('../models/homepageVideosModel');
var hvm;


function HomepageVideosController() {
hvm=new homepageVideosModel();
}

HomepageVideosController.prototype.getAll=function(req,res){
    hvm.findAll(req,function (err,data) {
        res.status(200).json(data)
    });
}

module.exports=HomepageVideosController;