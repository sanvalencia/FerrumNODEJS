const express = require('express')
const cors = require('cors');
const { MongoDB_Connect } = require('../public/db/config');

class Server{

    constructor(){
        this.app = express()
        this.port =process.env.PORT;
        this.conexionDB()
        this.middleware()
        this.routes()
     
    }

    middleware(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }

    routes(){

        this.app.use('/api/clientes', require('../public/routes/clientes.routes')) 
        this.app.use('/api/proveedores', require('../public/routes/proveedores.routes'))  
        this.app.use('/api/pedidos', require('../public/routes/pedidos.routes'))  
        

    }


    conexionDB(){
        MongoDB_Connect()
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
    }

}

module.exports = Server;