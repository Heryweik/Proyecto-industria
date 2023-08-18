const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//Importando rutas
const clienteRoutes = require('./routes/cliente');
const productoRoutes = require('./routes/producto');
const categoriaRoutes = require('./routes/categoria');
const proveedorRoutes = require('./routes/proveedor');
const usuarioRoutes = require('./routes/usuario');
const servicioRoutes = require('./routes/servicio');

//Settings

app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'bd-proyecto.cs5mqlupmen8.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'admin123',
    port: 3306,
    database: 'Industria'
},'single'));

app.use(express.urlencoded({extended: false}));

//Routes
app.use('/cliente', clienteRoutes);
app.use('/producto', productoRoutes);
app.use('/categoria', categoriaRoutes);
app.use('/proveedor', proveedorRoutes);
app.use('/usuario', usuarioRoutes);
app.use('/servicio', servicioRoutes);


// Static Files
app.use(express.static(path.join(__dirname,'public')));

// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
})
