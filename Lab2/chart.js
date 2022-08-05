const express= require('express');
const app = express()

const http = require('http')
const server =http.createServer(app);
const {Server} =require('socket.io')
//invoco al emtodo io tipo server
const io = new Server(server)

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/versions.html')

})
//y con su metodo on esablece la directiva del lado del servidor
//tambien tiene disconnetc

io.on ('connection' ,(socket)=>{
    //variable que define la entrada y el "chat" es el identificador
    // msg es el parametro y ese msg vendra del cliente 
    socket.on('chat',(msg)=>{//identificaro
        //cada vez que llega un mensaje 
        io.emit('chat',msg);
        console.log('Mensaje: ' +msg)
    })
})

app.use(express.static('public'));
server.listen(3000,()=>{
    console.log('Servidor corriendo en http://localhost:3000')
})
