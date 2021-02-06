const express = require('express')

//Serividor express
const app = express()
const PORT = process.env.PORT || 3000;

//Servidor de sockets
const server = require('http').createServer(app);

//Configuración del socket server
const io = require('socket.io')(server);

//Desplegar directorio publico
app.use( express.static(__dirname + '/public') )

io.on('connection', ( socket ) => { 
  
  socket.on('mensaje-to-server', (data) => {
    console.log(data)
    
    //Emit a todos los clientes conectados en mismo namespace
    io.emit('mensaje-from-server', data );
  });

});




server.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
});