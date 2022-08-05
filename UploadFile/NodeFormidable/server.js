const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const formidable = require('formidable')
const path = require('path')
const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/api/subir', function (req, res){
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = __dirname + '/uploads/' + file.name;
    });

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });

    
});

app.listen(PORT, () => console.log( `App corriendo en puerto: ${PORT}`) );