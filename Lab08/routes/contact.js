var express = require('express');
var router = express.Router();
var controller = require('../controllers/contactController');

router.get('/listar',function(req,res){
    controller.show(req,res);
});

router.post('/create',function(req,res){
    controller.create(req,res);
});

router.get('/listar/:id',function(req,res){
    controller.detail(req,res);
});

router.post('/update',function(req,res){
    controller.update(req,res);
});
router.get('/remove/:id',function(req,res){
    controller.delete(req,res);
});

module.exports = router;