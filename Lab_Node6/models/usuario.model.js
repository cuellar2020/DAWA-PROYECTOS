const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    
    fullname: {
        type: String
    },
    
    email: {
        type: String,
        unique: true,
        required : true
    }
    
}
);

module.exports = mongoose.model('Usuario', UserScheme);
