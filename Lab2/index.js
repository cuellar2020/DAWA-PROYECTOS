const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//nombre donde se encuentran el index.html
//por lo general una carpte para los js que estrana dentro de la publica que es la forma normal
app.use(express.static('public'));

// depósito de datos temporal

let usuarios = []; // <- se inicia vacío con la aplicación
//change all ocurences 
//rutas o endpoints
//-----------------------------------------------
//crear usuario
app.post('/user/create', (req, res, next) => {
    //lee el formulario todo lo que se envia al html
  const usuario = req.body;
  if(!usuario) {

    return res.status(400).json({error: 'No hay datos'});
  }
  usuario.id = usuarios.length + 1;
  console.log(usuario);
  usuarios.push(usuario);
  console.log('Usuario registrado');
  // podemos enviar el array de usuarios, así por cada vez que accedemos a este
  // a este endpoint vamos viendo los datos almacenados
  return res.redirect('/login.html')

});

//-----------------------------------

//------------------------------
//es get ras y se ejecuta y carga la pagina pero si es post no hara nada solo se ejecuta y dice que 
app.get("/",(req,res)=>{
  res.sendFile(__dirname + 'public/login.hml');
});
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
          console.log(`correo : ${usuarios[i].correo} correo ingresado : ${usuario.correo}`);
          console.log(`Password : ${usuarios[i].password} password ingresado : ${usuario.password}`);
          console.log('Usuario Logueado');
          return res.redirect('/index-2.html');
        }
    }

    console.log('No existe esa cuenta!');
    return res.redirect('/login.html');

});
//-----------
//Mostrar usuario
app.post('/user/show', (req,res)=>{
  const id = req.body.id;

  for(var i=0; i<usuarios.length;i++){
    if(usuarios[i].id == id){
      console.log(usuarios[i]);
      return res.status(200).json(usuarios[i]);
    }
  };
  return res.status(400).json({error: 'Usuario no existente'});

})
//Reset
app.post('/user/reset',(req,res)=>{
  const correo =req.body.correo;
  const newpassword = req.body.password;

  for(var i=0; i<usuarios.length;i++){
    if(usuarios[i].correo ==correo){
      console.log(`correo : ${usuarios[i]} tenia como contrasenia : ${usuarios[i].password}`);
      usuarios[i].password = newpassword;
      console.log(`correo : ${usuarios[i].correo} actualizo su contra a ${usuarios[i].password}`);
      return res.status(200).json(usuarios[i]);
    };

  };
  return res.status(400).json({error: 'Usuario no existente'});
});




//----------------
app.post('/user/actu', (req,res)=>{

  const id = req.body.id;
  const correo = req.body.correo;

  for(var i=0; i<usuarios.length;i++){

    if(usuarios[i].id ==id){
      console.log(`Se actualizara la cuenta con id : ${usuarios[i].id}`);
      console.log('Antiguo valores:');
      console.log(usuarios[i].correo);
      usuarios[i].correo = correo;
      console.log('\nNuevos valores:');
      console.log(usuarios[i].correo);
      return  res.status(200).json(usuarios[i]);

    }
  }
  return res.status(400).json({error: 'Usuario no existente'})
});

//delete
app.post('/user/delete',(req,res)=>{
  const id= req.body.id;
  console.log(usuarios)

  for(var i=0; i<usuarios.length;i++){
    if(usuarios[i].id ==id){
      console.log(`Se borro el usuario con correo: ${usuarios[i].correo}`);
      usuarios.splice(i,1);
      console.log(usuarios);
      return res.status(200).json(usuarios);
        
    }
  };
  return res.status(400).json({error : 'Usuarios no existente'})

});
let historias=[]
//Historia
app.post('/histo/create', (req, res, next) => {
  const historia = req.body;
  if(!historia){
    return res.status(400).json({error: 'No hay libros registrados'});
  }
  for (var i=0; i<usuarios.length;i++){
    if(usuarios[i].id == historia.id_user){
      historia.id = historias.length +1;
      console.log(historia);
      historias.push(historia);
      return res.redirect('/typography.html')
    };
  };
  return res.status(400).json({error: 'No existe ese libro'})
})

//Leer historia
app.post('/histo/show',(req,res)=>{
  const id=req.body.id;
  for(var i=0; i<historias.length;i++){
    if(historias[i].id == id){
      console.log(historias[i]);
      return res.status(200).json(historias[i]);
    }
  };
  return res.status(400).json({error: 'Historia no existente'});
});
//delete historia
app.post('/historia/dele', (req,res)=>{
  const id = req.body.id;
  console.log(historias);
  for(var i=0; i<historias.length;i++){
    if(historias[i].id == id){
      console.log('Se borro la historia :)');
      historias.splice(i,1);
      console.log(historias);
      return res.status(200).json(historias);
      
    }
  }
  return res.status(400).json({error: 'Historia no existe'})
});

//update

app.post('/histo/actu',(req,res)=>{
  const id = req.body.id;
  const data = req.body.data;

  for(var i=0; i<historias.length;i++){
    if(historias[i].id == id){
      console.log(`Se actualizo la historia con id : ${historias[i].id}`);
      console.log(`Antiguos valores`);
      console.log(historias[i].texto);
      historias[i].texto=data;
      console.log('/nNuevos valores');
      console.log(historias[i].texto);
      return res.status(200).json(historias[i]);
  }

  }
  return res.status(400).json({error: 'Hitoria no existente'})
});
//iniciamos el servidor
const port = 3000;
app.listen(port, () => {
  console.info(`Servidor escuchando en puerto: ${port}`);
});