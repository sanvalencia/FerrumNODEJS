const { Schema,model} = require ('mongoose')

const ProveedorModel = Schema({

    nombre:{
        type:String,
        required:["El campo nombre es obligatorio"]
    },
    cedula:{
        type:Number,
        required:["El campo cédula es obligatorio"]
    },
    tipo_persona:{
        type:String,
        required:["El campo tipo persona es obligatorio"]
    },
    regimen:{
        type:String,
        required:["El campo régimen es obligatorio"]
    },
    telefono:{
        type:String,
        required:["El campo teléfono es obligatorio"]
    },
    pais:{
        type:String,
        required:["El campo país es obligatorio"]
    },
    departamento:{
        type:String,
        required:["El campo departamento es obligatorio"]
    },
    municipio:{
        type:String,
        required:["El campo municipio es obligatorio"]
    },
    direccion:{
        type:String,
        required:["El campo dirección es obligatorio"]
    },
    correo:{
        type:String,
        required:["El campo correo es obligatorio"]
    },
    estado:{
        type:Number,
        required:["El campo estado es obligatorio"]
    },
    tipo_comercio:{
        type:String,
        required:["El campo tipo comercio es obligatorio"]
    },

})

module.exports = model('proveedor',ProveedorModel);