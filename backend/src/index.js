const customerC = require('./controllers/customerChat')//funciones de llamada por parte del chat

const express = require('express')
const morgan = require('morgan') //paquete para verificacion
const routerConstumer = require('./routes/routes')
const bodyParser=require('body-parser')//config para correo
const pat = require('path')
const auth = require('./auto')

//Configuracion del puerto del servidor
const port = (process.env.port || 3000)
const cors = require("cors")
//const { urlencoded } = require('express')
//express
const app = express()


//config para correos
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//////////////////////////////////////////////

//Permitir que el servidor acepte json
app.use(express.json())
app.use(cors())

//CORREO
//app.use(require('./routes/correoRoute'))


//configuracion del puerto
app.set('port',port)


//Middlewares
app.use(morgan('dev'))
app.use('/api',routerConstumer)//ruta por defecto del servidor localhost:3000/api
app.use(express.static(pat.join(__dirname,'dbimagesProducts')))

const serverIO = require('socket.io')
const { resolve } = require('path')

//express start
const server = app.listen(app.get('port'),(error)=>{
    if (error) {
        console.log('There was an error starting the server ' + error)
    } else {
        console.log('Server start ' + port)
    }
})

//// Sockets

const io = new serverIO.Server(server,{
    cors: {
        origin: "*"
    }   
})

io.on('connection',(socket)=>{
    socket.on("test", () =>{
        console.log(`Bienvenido ${socket.id}` )
    })

    // Data es un json del estilo en que se hace en las rutas
    socket.on('newchat',(data) => {

        // Dentro de la funcion se envia una respuesta 'newchatresponse'
        customerC.newChat(data, socket)       
          
    })

    socket.on('getchats',(data) => {

        // Dentro de la funcion se envia una respuesta 'getchatsresponse'
        customerC.getChats(data, socket)

    })

    socket.on('addMessage', (data) => {

        // Dentro de la funcion se envia una respuesta 'addMessageResponse'
        customerC.addMessage(data, socket)

    })

    socket.on('listmessages', (data) => {
        // Dentro de la funcion se envia una respuesta 'addMessageResponse'
        customerC.listMessages(data, socket)

    })

    socket.on('listmessagesv2', (data) => {
        // Dentro de la funcion se envia una respuesta 'addMessageResponse'
        customerC.listMessagesv2(data, socket)

    })

    socket.on('listmessagesv3', (data) => {
        // Dentro de la funcion se envia una respuesta 'addMessageResponse'
        customerC.listMessagesv3(data, socket)

    })

})
