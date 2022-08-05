const mongoose= require ("mongoose");
Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/contacts");
const modelShema = new Schema({
    titulo: {type:String,required:true},
    descripcion: { type:String,required:true},
    categoria: { type:String,required:true},
    fecha: {type:Date,required:true,default:Date.now},
    comentarios:[comentarioShema],
});

const comentarioShema = new Schema({
    autor : {type: String,required:true},
    mensaje: {type: String, required:true},
    fecha :{type:Date,required:true,default:Date.now},
})

model = mongoose.model('contact',modelShema,'contact');
module.exports= model;

