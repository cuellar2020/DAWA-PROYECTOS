const Model = require("../models/Tesis");


exports.crearModel = async (req, res) => {

    try {
        let model;

        // Creamos nuestro pmodel
        model = new Model(req.body);

        await model.save();
        res.send(model);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerModels = async (req, res) => {

    try {

        const models = await Model.find();
        res.json(models)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarModel = async (req, res) => {

    try {
        const { nombre, categoria, ubicacion, precio } = req.body;
        let model = await model.findById(req.params.id);

        if(!model) {
            res.status(404).json({ msg: 'No existe el model' })
        }

        model.nombre = nombre;
        model.categoria = categoria;
        model.ubicacion = ubicacion;
        model.precio = precio;

        model = await Model.findOneAndUpdate({ _id: req.params.id },model, { new: true} )
        res.json(model);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerModel = async (req, res) => {

    try {
        let model = await Model.findById(req.params.id);

        if(!model) {
            res.status(404).json({ msg: 'No existe el model' })
        }
       
        res.json(model);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarModel = async (req, res) => {

    try {
        let model = await Model.findById(req.params.id);

        if(!model) {
            res.status(404).json({ msg: 'No existe el pmodel' })
        }
       
        await Model.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Model eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}