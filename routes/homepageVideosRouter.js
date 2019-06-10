var express = require('express');
var router=express.Router();
var homepageVideosController=require('../controllers/homepageVideosController');
var hvc=new homepageVideosController();
var middlewareAuth=require('../auth/authentication');

router.get('/',middlewareAuth,hvc.getAll.bind(hvc));

module.exports=router;