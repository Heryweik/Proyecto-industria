const express = require('express');
const session = require('express-session');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');

const app = express();

app.use(cors());
app.use(express.json()); /* Hacemos que reciba informacion tipo json */
app.use(bodyParser.urlencoded({ extended: true }));

//Importando rutas
const clienteRoutes = require('./routers/cliente');
const productoRoutes = require('./routers/producto');
const categoriaRoutes = require('./routers/categoria');
const proveedorRoutes = require('./routers/proveedor');
const usuarioRoutes = require('./routers/usuario');
const servicioRoutes = require('./routers/servicio');

// Configuración de express-session
app.use(session({
    secret: 'Secret',
    resave: false,
    saveUninitialized: true
}));

//Settings
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));

// Configuración de la conexión a la base de datos
app.use(myConnection(mysql, {
    host: 'bd-proyecto.cs5mqlupmen8.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'admin123',
    port: 3306,
    database: 'DentalServices'
},'single'));

app.use(express.urlencoded({extended: false}));

//Routes
app.use('/clientes', clienteRoutes);
app.use('/productos', productoRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/proveedores', proveedorRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/servicios', servicioRoutes);


// Static Files
app.use(express.static(path.join(__dirname,'public')));

// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
})
