let user = require("../models/user_model");

module.exports = { 
    show :function(req,res){
        user.find({},function(err,items){
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
        let obj = new user
        obj.titulo = req.body.titulo;
        obj.descripcion = req.body.descripcion;
        obj.categoria = req.body.categoria;
        obj.fecha = req.body.fecha;
        obj.comentarios = req.body.comentarios;
        obj.save(function(err,newData){
            if(err){
                console.log(err);
                
            }else{
                res.json(newData)
            }
        });

    },
    update: function(req,res){
        let body = req.body;
        user.updateOne({_id: body._id},{
            $set:{
                titulo: body.titulo,
                descripcion:body.descripcion,
                categoria:body.categoria,
                fecha:body.fecha,
                comentarios:body.comentarios
            }

        },
        function(error,info){
            if(error){
                res.json({
                    resultado:false,
                    msg:'No hubo modificacion',
                    err
                });
            }else{
                res.json({
                    resultado:true,
                    info:info
                })
            }
        }
        )

   },
   delete:function(req,res){
    let val_id = req.params.id;
    user.deleteOne({_id:val_id},function(err){
        if(err){
            console.log(err)
            res.sendStatus(500)
        }else{
            res.sendStatus(200)
        }
    });

   }
};