const express = require('express');
const session = require('express-session');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql2');
const myConnection = require('express-myconnection');

const app = express();

app.use(cors({
    origin: 'http://52.73.89.207:8080',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}
    /* {
    origin: ['http://52.73.89.207:8080', 'http://localhost:8082'], // Agrega las URL permitidas
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
} */));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://52.73.89.207:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.json()); /* Hacemos que reciba informacion tipo json */
app.use(bodyParser.urlencoded({ extended: true }));

//Importando rutas
const clienteRoutes = require('./routers/cliente');
const productoRoutes = require('./routers/producto');
const ventaRoutes = require('./routers/venta');
const proveedorRoutes = require('./routers/proveedor');
const usuarioRoutes = require('./routers/usuario');
const servicioRoutes = require('./routers/servicio');
const empleadoRoutes = require('./routers/empleado');
const methods = require('methods');

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
app.use('/ventas', ventaRoutes);
app.use('/proveedores', proveedorRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/servicios', servicioRoutes);
app.use('/empleados', empleadoRoutes);


// Static Files
app.use(express.static(path.join(__dirname,'public')));

// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
})
