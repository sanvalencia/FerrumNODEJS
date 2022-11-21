const {trows} = require ('assert')
const mongoose = require ('mongoose')

const MongoDB_Connect = () => {
    try{
        mongoose.connect(process.env.MONGO_CNN)
        console.log('conexion exitosa')
    }catch(error){
        console.log(error)
    }
}


module.exports = {MongoDB_Connect}