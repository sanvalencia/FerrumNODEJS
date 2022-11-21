
const  Route = require('express');
const { getClientes,postClientes } = require('../controllers/Clientes.controller');
const route = Route()


route.get('/',getClientes);

  route.post('/',postClientes)

  route.get('/contacts', (req, res) => {
      res.send('Hello contacts')
    })
  

    module.exports = route;