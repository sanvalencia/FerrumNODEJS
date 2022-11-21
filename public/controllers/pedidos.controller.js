 
const {response} = require ('express');
const pedido = require('../models/pedido.model');
const detallepedido = require('../models/detallepedido.model');


const getPedidos = async(req, res = response) => {
    const datospedidos = await pedido.find()
    const datosdetalles = await detallepedido.find()
    res.json({
        datos:datospedidos,datosdetalles
    })
  }

const postPedidos = async(req, res = response) => {
    const data = req.body;
    const datospedido = new pedido(data)
    const datosdetalle = new detallepedido(data)
    await datospedido.save();
    await datosdetalle.save();
    res.json({
        datospedido,
        datosdetalle
    })
  }

  module.exports = {getPedidos,postPedidos}