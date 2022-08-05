var mongoose = require("mongoose");
Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/users");

var userShema = new Schema({
    _id:{type:Object},
    titulo :{type:String,required:true},
    descripcion:{type:String,required:true},
    categoria:{type:String,required:true},
    fecha:{type:Date},
    permmalink: { type: String, createdDate: Date.now },
    comentarios:[{Array}]
});


user = mongoose.model('contacts',userShema,"contacts")
module.exports=user;