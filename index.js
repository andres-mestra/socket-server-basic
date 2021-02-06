//Serividor express
const app = require('express')();
const PORT = process.env.PORT || 3000;

//Servidor de sockets
const server = require('http').createServer(app);

//Configuración del socket server
const io = require('socket.io')(server);

io.on('connection', () => { /* … */ });




server.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
});