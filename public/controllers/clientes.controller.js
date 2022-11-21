 
const {response} = require ('express');
const cliente = require('../models/cliente.model');


const getClientes = async(req, res = response) => {
    const datosclientes = await cliente.find()
    
    res.json({
        datos:datosclientes
    })
  }

const postClientes = async(req, res = response) => {
    const data = req.body;
    const datoscliente = new cliente(data)
    
    await datoscliente.save();
    res.json({
        datoscliente
    })
  }

  module.exports = {getClientes,postClientes}