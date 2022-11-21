const { Schema,model} = require ('mongoose')

const DetallePedidoModel = Schema({

    producto:{
        type:String,
        required:["El producto del pedido es obligatorio"]
    },
    cantidad:{
        type:Number,
        required:["El cantidad del producto es obligatorio"]
    },
    precio_unitario:{
        type:Number,
        required:["El precio del producto es obligatorio"]
    },
    figura:{
        type:String,
    },
    descripcion:{
        type:String,
    },

})

module.exports = model('detallepedido',DetallePedidoModel);