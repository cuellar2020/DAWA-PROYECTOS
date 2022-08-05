const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

router.get('/', (req, res) => {
    res.render("usuario/addOrEdit", {
        viewTitle: "Insert usuario"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});


function insertRecord(req, res) {
    var usuario = new usuario();
    usuario.fullName = req.body.fullName;
    usuario.email = req.body.email;
   
    usuario.save((err, doc) => {
        if (!err)
            res.redirect('usuario/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("usuario/addOrEdit", {
                    viewTitle: "Insert usuario",
                    usuario: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}

function updateRecord(req, res) {
    Usuario.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('usuario/list'); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("usuario/addOrEdit", {
                    viewTitle: 'Update usuario',
                    usuario: req.body
                });
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}


router.get('/list', (req, res) => {
    Usuario.find((err, docs) => {
        if (!err) {
            res.render("usuario/list", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving usuario list :' + err);
        }
    });
});


function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}

router.get('/:id', (req, res) => {
    Usuario.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("usuario/addOrEdit", {
                viewTitle: "Update usuario",
                usuario: doc
            });
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Usuario.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/usuario/list');
        }
        else { console.log('Error in usuario delete :' + err); }
    });
});

module.exports = router;