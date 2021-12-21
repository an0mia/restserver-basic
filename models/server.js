const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        //conexión a base de datos
        this.Connection();

        //middlewares
        this.middlewares();

        //rutas aplicación
        this.routes();
    }

    async Connection(){
        await dbConnection();
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
            console.log('Listen on port:', this.port);
        });

    }
}

module.exports = Server;