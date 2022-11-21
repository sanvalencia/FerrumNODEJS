
const  Route = require('express');
const { getProveedores,postProveedores } = require('../controllers/Proveedores.controller');
const route = Route()


route.get('/',getProveedores);

  route.post('/',postProveedores)

  route.get('/contacts', (req, res) => {
      res.send('Hello contacts')
    })
  

    module.exports = route;