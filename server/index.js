var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//se carga la vista estatica desde un middleware de express hacia la carpeta client y en client se crea el html del chat

app.use(express.static('client'));

app.get('/hola', function(req,res){
    res.status(200).send('hola mundo desde una ruta');
});

var messages = [{
    id: 1,
    text: 'bienvenido al chat privado de eduard',
    nickname: 'Bot - eduardcolmenares.com'
}]

io.on('connection',function(socket){
    console.log('el nodo con IP'+socket.handshake.address+'se ha conectado');
    socket.emit('messages', messages);
})

server.listen(6677,function(){
    console.log('servidor funcionando en http://localhost:6677');
});