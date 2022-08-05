const express = require('express');
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
const app = express();

const initDB = require('./config/db');
const model = require('./models/app');


app.all('/user',(req, res, next) => {
    console.log('Por Aqui Pasamos');
    next();
});

app.use(bodyParser.urlencoded({ 
    limit: '20mb',
    extended: false }));

app.use(bodyParser.json({
    limit: '20mb'
}));



//----------------------------------------//
//-----------------USER-------------------//
//----------------------------------------//

app.get('/', (req, res) => {
    
    res.sendFile(__dirname + '/public/login.html');
    
});


app.post('/', async (req, res) => {
    const data = model(req.body);
    model.find(req.body)
         .then(async (docs) =>  {
            await 
            console.log(docs)
            if(docs != ''){
                for(var i=0; i< docs.length; i++){
                   if(docs[i].username == data.username && docs[i].password == data.password){
                        console.log('Valor encontrado' + docs);  
                        const user = {
                            nombre : docs[i].username,
                            password : docs[i].password
                        }; 
                        
                    }
                }
            }else{
                res.sendFile(__dirname + '/public/login.html');
            }
          })
         .catch((error) => {
            console.log('Error en Login: ' + error);  
            res.sendFile(__dirname + '/public/login.html');
         });

});


//----------------------------------------//
//--------------REGISTER------------------//
//----------------------------------------//

app.get('/register', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if(error){
            console.log(`get pagina de register`);
            res.sendFile(__dirname + '/public/register.html');
        }else{
            console.log(`get pagina de register`);
            res.sendFile(__dirname + '/public/register.html');
        }

    })
});

app.post('/register', (req, res) => {

    console.log(`post pagina de register ${req.body.username}`);
    console.log(`post pagina de register ${req.body.password}`);
    console.log(`post pagina de register ${req.body.repeatpassword}`);
    console.log(`post pagina de register ${req.body.email}`);

    const data = req.body;

    model.create(data, (err, docs) =>{
        if(err){
            console.log('Error ', err);
            res.sendFile(__dirname + '/public/login.html');
        }else{
            console.log({data:docs});
            res.sendFile(__dirname + '/public/login.html');
        }
        
    })
});

//----------------------------------------//


app.post('/user',(req, res) => {
    res.send('Peticion POST User Recibida');
    console.log('Se ejecuto mi POST');
});

app.put('/user',(req, res) => {
    res.send('Peticion POST User Recibida');
});

app.delete('/user',(req, res) => {
    res.send('<h1>Peticion de Eliminacion Recibida</h1>');
});

//----------------------------------------//

app.post('/about/:id',(req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send(`Peticion POST ${req.params.id}`);
    console.log('Se ejecuto mi POST');
});

app.put('/about',(req, res) =>{
    res.json({
        username: 'Jacko',
        lastname: 'Paredes'
      });
});

app.get('/contact',(req, res) =>{
    for(var i=0; i<obj.length;i++){
      console.log('Nombre: ' + obj[i].name + ', ' + obj[i].edad);
    }
    res.send('Parseo Correcto del JSON');
});

//---------------------------------------------//

//Authorization Bearer <token>
function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined'){
        bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    }
    else{
        res.sendFile(__dirname + '/public/register.html');
    }
}

app.use(express.static('public'));

app.listen(3000, ()=> {
    console.log('Servidor en Puerto 3000');
});

initDB();