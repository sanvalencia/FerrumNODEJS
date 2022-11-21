 
const {response} = require ('express');
const proveedor = require('../models/proveedor.model');


const getProveedores = async(req, res = response) => {
    const datosproveedores = await proveedor.find()
    
    res.json({
        datos:datosproveedores
    })
  }

const postProveedores = async(req, res = response) => {
    const data = req.body;
    const datosproveedor = new proveedor(data)
    
    await datosproveedor.save();
    res.json({
        datosproveedor
    })
  }

  module.exports = {getProveedores,postProveedores}