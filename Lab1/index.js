const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//nombre donde se encuentran el index.html
app.use(express.static('public'));

// depósito de datos temporal

let usuarios = []; // <- se inicia vacío con la aplicación
//change all ocurences 
//rutas o endpoints
//-----------------------------------------------
//crear usuario
app.post('/user/crear', (req, res, next) => {
    //lee el formulario todo lo que se envia al html
  const usuario = req.body;
  if(!usuario) {

    return res.status(400).json({error: 'No hay datos'});
  }
  usuario.id = usuarios.length + 1;
  console.log(usuario);
  usuarios.push(usuario);
  
  // podemos enviar el array de usuarios, así por cada vez que accedemos a este
  // a este endpoint vamos viendo los datos almacenados
  return res.redirect('/index.html')
 
});
//-----------------------------------

//------------------------------
//user login
app.post('/user/login', (req, res, next) => {

    const usuario = req.body;
    //verifica si existe si no existe envia 
    if(!usuario) {
      return res.status(400).json({error: 'No hay nada'});
    }
    //recorrido a la lista
    for(var i=0; i< usuarios.length;i++){
        //verifica que son iguales 
        if(usuarios[i].correo == usuario.correo && usuarios[i].password == usuario.password){
            console.log(`correo: ${usuarios[i].correo} --- correo ingresado: ${usuario.correo}`);
            console.log(`Password: ${usuarios[i].password} --- Password ingresado: ${usuario.password}`);
            console.log('Usuario Logueado');
            return res.redirect('/metodos.html');
        }1
    }

    console.log('No existe esa cuenta!');
    return res.redirect('/logueo.html');

});
//-------------------------------------
//----------------------------------
//Reset
app.post('/user/reset', (req, res) => {

    const correo = req.body.correo;
    const newpassword = req.body.password;

    for(var i=0; i< usuarios.length;i++){

        if(usuarios[i].correo == correo){
            console.log(`correo : ${usuarios[i].correo} tenia como contraseña : ${usuarios[i].password}`);
            usuarios[i].password = newpassword;
            console.log(`correo : ${usuarios[i].correo} actualizo su contraseña a ${usuarios[i].password}`);
            return res.status(200).json(usuarios[i]);
        };
    };

    return res.status(400).json({error: 'Usuario no existente'});

});
//--------------------------------------
//Mostrar usuario
app.post('/user/show', (req, res) => {

    const id = req.body.id;

    for(var i=0; i< usuarios.length;i++){

        if(usuarios[i].id == id){
            console.log(usuarios[i]);
            return res.status(200).json(usuarios[i]);
        }
    };

    return res.status(400).json({error: 'Usuario no existente'});

});
//--------------

//Actualizar Usuario
app.post('/user/actu', (req, res) => {

    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;

    for(var i=0; i< usuarios.length;i++){

        if(usuarios[i].id == id){
            console.log(`Se actualizara la cuenta con id : ${usuarios[i].id}`);
            console.log('Antiguo valores : ');
            console.log(usuarios[i].nombre);
            console.log(usuarios[i].apellido);
            console.log(usuarios[i].correo);
            usuarios[i].nombre = nombre;
            usuarios[i].apellido = apellido;
            usuarios[i].correo = correo;
            console.log('\nNuevos valores:');
            console.log(usuarios[i].nombre);
            console.log(usuarios[i].apellido);
            console.log(usuarios[i].correo);
            return res.status(200).json(usuarios[i]);
        }
    }

    return res.status(400).json({error: 'Usuario no existente'});

});
//---------------------
app.all('/', (req, res, next) => {
  return res.status(200).json({message: 'Servidor listo'})
});
//---------------------------------------
//eliminar
app.post('/user/dele', (req, res) => {

    const id = req.body.id;

    console.log(usuarios)

    for(var i=0; i< usuarios.length;i++){

        if(usuarios[i].id == id){
            console.log(`Se borro el usuario con nombre : ${usuarios[i].nombre} `);
            usuarios.splice(i,1);
            console.log(usuarios);
            return res.status(200).json(usuarios);
        }
    };

    return res.status(400).json({error: 'Usuario no existente'});

});
//---------------------------
//Historia
let historias = [];
app.post('/historia/crear', (req, res, next) => {

    const historia = req.body;

    if(!historia) {
      return res.status(400).json({error: 'No hay datos'});
    }

    for(var i=0; i< usuarios.length;i++){

        if(usuarios[i].id == historia.id_user){
            historia.id = historias.length + 1;
            console.log(historia);
            //console.log(account.email);
            historias.push(historia);
            return res.redirect('/usuario_story.html');
        }
    };

    return res.status(400).json({error: 'No existe el usuario'});
});
//---------------------
//Leer


app.post('/historia/show', (req, res) => {

    const id = req.body.id;

    for(var i=0; i< historias.length;i++){

        if(historias[i].id == id){
            console.log(historias[i]);
            return res.status(200).json(historias[i]);
        }
    };

    return res.status(400).json({error: 'Historia no existente'});

});
//delete
//DELETE
app.post('/historia/dele', (req, res) => {

    const id = req.body.id;

    console.log(historias);

    for(var i=0; i< historias.length;i++){

        if(historias[i].id == id){
            console.log(`Se borro la historia `);
            historias.splice(i,1);
            console.log(historias);
            return res.status(200).json(historias);
        }
    };

    return res.status(400).json({error: 'Historia no existente'});

});
//update
app.post('/historia/actu', (req, res) => {

    const id = req.body.id;
    const data = req.body.data;
   

    for(var i=0; i< historias.length;i++){

        if(historias[i].id == id){
            console.log(`Se actualizara la historia con id : ${historias[i].id}`);
            console.log('Antiguo valores : ');
          
            console.log(historias[i].texto);
            
           
            historias[i].texto = data;
            
            console.log('\nNuevos valores:');
           
            console.log(historias[i].texto);
            
            return res.status(200).json(historias[i]);
        }
    }

    return res.status(400).json({error: 'Historia no existente'});

});


//--
// la siguiente ruta capturará todos los métodos http a cualquier ruta que no haya
// sido declarada anteriormente
app.all('/', (req, res, next) => {
  return res.status(200).json({message: 'Servidor listo'})
});

//iniciamos el servidor
const port = 3000;
app.listen(port, () => {
  console.info(`Servidor escuchando en puerto: ${port}`);
});