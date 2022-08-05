let model = require("../models/contact_model");


module.exports = {
    show :function(req,res){
        model.find({},function(err,items){
            if(!err){
                res.json(items)
            }else{
                res.sendStatus(500);
                console.log(err)
            }
        });
    },
    detail:function(req,res){
       

    },
    create: function(req,res){
        
    },
    
    update: function(req,res){

    },
    delete:function(req,res){
       

    }
};