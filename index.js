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
  
  socket.emit('mensaje-bienvenida', {
    msg: 'Bienvenido al server'
  })

  socket.on('mensaje-cliente', (data) => {
    console.log(data)
  })

});




server.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
});