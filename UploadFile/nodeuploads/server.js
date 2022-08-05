const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs');
const path = require('path');
const PORT = 3000;

// Enviar el Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Iniciar el upload, limitar el tamanio de la subida
const upload = multer({
  storage: storage,
  limits:{fileSize: 100000000000000000000000000000000000000000000000000000000000000000000000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('myImage');//el nombre del input donde se envia la imagen

// Revisar el tipo de archivo que se subira
function checkFileType(file, cb){
  // Extensiones permitidas al subir un archivo, importante al clasificar y limitar e restringir algunos que no quieren ser permitidos
  const filetypes = /jpeg|jpg|png|gif/;
 
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error');
  }
}

// Iniciar app
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./public'));

app.get('/', (req, res) => res.render('index'));

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err){
      res.render('index', {
        msg: err
      });
    } else {
      if(req.file == undefined){
        res.render('index', {
          msg: 'Error: No File Selected!'
        });
      } else {
        res.render('index', {
          msg: 'File Uploaded!',
          file: `uploads/${req.file.filename}`
        });
      }
    }
  });
});
app.listen(PORT, () => console.log( `App corriendo en puerto: ${PORT}`) );