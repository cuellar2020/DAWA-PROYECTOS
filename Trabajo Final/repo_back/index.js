const express = require('express');
const conectarBD = require("./bd/database")
const cors = require("cors");
const path = require('path')
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })

const app = express();
conectarBD()
app.use(cors())


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api/tesis/', require('./routes/user'));
app.listen(4000);


console.log("Servidor en el puerto",4000)