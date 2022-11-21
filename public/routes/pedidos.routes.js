
const  Route = require('express');
const { getPedidos,postPedidos } = require('../controllers/pedidos.controller');
const route = Route()


route.get('/',getPedidos);

  route.post('/',postPedidos)

  route.get('/contacts', (req, res) => {
      res.send('Hello contacts')
    })
  

    module.exports = route;