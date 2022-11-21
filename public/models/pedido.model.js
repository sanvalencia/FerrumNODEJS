const { Schema,model} = require ('mongoose')

const PedidoModel = Schema({

    nombre:{
        type:String,
        required:["El nombre de cliente es obligatorio"]
    },
    cedula:{
        type:String,
        required:["La cédula de cliente es obligatorio"]
    },
    telefono:{
        type:String,
        required:["El telefono de cliente es obligatorio"]
    },
    tipo_persona:{
        type:String,
        required:["El tipo de cliente es obligatorio"]
    },
    pais:{
        type:String,
        required:["El pais de cliente es obligatorio"]
    },
    departamento:{
        type:String,
        required:["El departamento de cliente es obligatorio"]
    },
    municipio:{
        type:String,
        required:["El municipio de cliente es obligatorio"]
    },
    direccion:{
        type:String,
        required:["La direccion de cliente es obligatorio"]
    },
    fecha_registro:{
        type:Date,
        required:["La fecha de registro del pedido es obligatorio"]
    },
    fecha_entrega:{
        type:Date,
        required:["La fecha de entrega del pedido es obligatorio"]
    },
    metodo_entrega:{
        type:String,
        required:["El metodo de entrega del pedido es obligatorio"]
    },
    estado:{
        type:Number,
        required:["El estado del pedido es obligatorio"]
    },
    medio_pago:{
        type:String,
        required:["El medio de pago del pedido es obligatorio"]
    },
    metodo_pago:{
        type:String,
        required:["El metodo de pago del pedido es obligatorio"]
    },
    abono:{
        type:Number,
        required:["El abono del pedido es obligatorio"]
    },
    precio_total:{
        type:Number,
        required:["El precio total del pedido es obligatorio"]
    },
})

module.exports = model('pedido',PedidoModel);