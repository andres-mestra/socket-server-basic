const express = require('express')
const http = require('http')
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors');
const Sockets = require('./sockets');
const { runInThisContext } = require('vm');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    //Http server
    this.server = http.createServer(this.app)

    //Configuración de socket
    this.io = socketIo(this.server, { /* Configuraciones */ })
  }

  middlewares() {
    //Desplegar directorio publico
    this.app.use(express.static( path.resolve(__dirname, '../public') ))
    this.app.use(cors())
  }
  

  configSockets() {
    new Sockets( this.io )
  }


  execute() {
    //Inicializa middlewares
    this.middlewares()

    //Inicializar sockets
    this.configSockets()

    //Inicializar server
    this.server.listen(this.port, () => {
      console.log(`🚀 Server ready at http://localhost:${this.port}`)
    })
  }


}

module.exports = Server;