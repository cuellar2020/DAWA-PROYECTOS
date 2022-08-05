const User = require("../models/User");
const jwt = require('jsonwebtoken');
exports.crearUser = async (req, res) => {

    try {
        let user;

        user = new User(req.body);

        await user.save();
        res.send(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerUser = async (req, res) => {

    try {
        let user = await User.findById(req.params.id);

        if(!user) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }
       
        res.json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

