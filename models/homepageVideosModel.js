function HomepageVideosModel() {

}

HomepageVideosModel.prototype.findAll=function(req,callback){
    callback(null,{message:"this is home page. videos will updated soon Thank you!"});
}


module.exports=HomepageVideosModel;