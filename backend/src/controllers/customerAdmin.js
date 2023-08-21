const conection = require('../config/connection')
const controller = {}//definicion de controller que guardara las rutas

//funcion de prueba
controller.test = (req,res) => {
    res.send('get routes admin')
}


module.exports = controller