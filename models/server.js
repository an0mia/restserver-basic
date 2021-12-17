const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        //middlewares
        this.middlewares();

        //rutas aplicación
        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use( express.json() );

        //directorio público
        this.app.use( express.static('public') );

    }

    routes() {

       this.app.use( this.usersPath, require('../routes/users') );

    }

    listen() {

        this.app.listen( this.port , () => {
            console.log('Servidor escuchando en el puerto:', this.port);
        });

    }
}

module.exports = Server;