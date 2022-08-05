const mongoose = require('mongoose');

const TesisSchema = mongoose.Schema({
    tema_investigacion: {
        type: String,
        required: true
    },
    resumen: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    autor1: {
        type: String,
        required: true
    },
    autor2: {
        type: String,
        default:null
    },
    autor3: {
        type: String,default:null
    },
    carrera: {
        type: String,
        required: true
    }
    ,
    tipo: {
        type: String,
        required: true
    },
    tipo_contenido: {
        type: String,
        required: true
    }
    ,
    palabras_claves: {
        type: String,
        required: true
    }
    ,
    file: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('tecsup', TesisSchema);
