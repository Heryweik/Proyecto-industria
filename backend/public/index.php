<?php

require_once __DIR__ . '/../includes/app.php';
require_once _DIR_ . '/../includes/app.php';
require_once('../controllers/ClienteController.php');
require_once('../controllers/ProductoController.php');
require_once('../controllers/AdminController.php');
require_once('../controllers/ApiController.php');
require_once('../controllers/ApiController.php');
require_once('../controllers/CategoriaController.php');
require_once('../controllers/CitaController.php');
require_once('../controllers/LoginController.php');
require_once('../controllers/ProveedorController.php');
require_once('../controllers/ServicioController.php');


require_once('../Models/Clientes.php');
require_once('../Models/Producto.php');
require_once('../Models/Usuario.php');
require_once('../Models/Proveedor.php');
require_once('../Models/Categoria.php');
require_once('../Models/Cita.php');
require_once('../Models/AdminCita.php');
require_once('../Models/CitaServicio.php');
require_once('../Models/ActiveRecord.php');
require_once('../Models/Servicio.php');

//use Controllers\APIController;
//use Controllers\CitaController;
use Controllers\LoginController;
//use Controllers\AdminController;
//use Controllers\ServicioController;

use MVC\Router;

$router = new Router();
// INICIAR SESION

$router->get('/',[LoginController::class,'login']);
$router->post('/',[LoginController::class,'login']);
$router->get('/logout',[LoginController::class,'logout']);

//RECUPERAR PASSWORD

$router->get('/olvide',[LoginController::class,'olvide']);
$router->post('/olvide',[LoginController::class,'olvide']);
$router->get('/recuperar',[LoginController::class,'recuperar']);
$router->post('/recuperar',[LoginController::class,'recuperar']);

//  CREAR CUENTA

$router->get('/crear-cuenta',[LoginController::class,'crear']);
$router->post('/crear-cuenta',[LoginController::class,'crear']);

// CONFRIMAR CUENTA

$router->get('/confirmar-cuenta',[LoginController::class, 'confirmar']);
$router->get('/mensaje',[LoginController::class, 'mensaje']);

//AREA PRIVADA
$router->get('/cita',[CitaController::class,'index']);
$router->get('/admin',[AdminController::class,'index']);

//API DE CITAS

$router->get('/api/servicios',[APIController::class,'index']);
$router->post('/api/citas',[APIController::class,'guardar']);
$router->post('/api/eliminar', [APIController::class, 'eliminar']);

// CRUD DE SERVICIOS
$router->get('/servicios', [ServicioController::class, 'index']);
$router->get('/servicios/crear', [ServicioController::class, 'crear']);
$router->post('/servicios/crear', [ServicioController::class, 'crear']);
$router->get('/servicios/actualizar', [ServicioController::class, 'actualizar']);
$router->post('/servicios/actualizar', [ServicioController::class, 'actualizar']);
$router->post('/servicios/eliminar', [ServicioController::class, 'eliminar']);

// Comprueba y valida las rutas, que existan y les asigna las funciones del Controlador
$router->comprobarRutas();

// index.php (Módulo de Proveedores)

// Incluye el archivo del modelo de Proveedor
require_once('models/Proveedor.php');

$proveedor1 = new Proveedor('1',	'Maria',	'12346',	'maria@gmail.com',	'la paz');
$proveedor2 = new Proveedor('2', 	'Carlos',	'234567',	'carlos@gmail.com',	'TGU');
$proveedor3 = new Proveedor('3', 	'Juana',	'345676',	'juana@gmail.com',	'Choluteca');
// Crea un arreglo con los proveedores disponibles
$proveedores = array($proveedor1, $proveedor2, $proveedor3);

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Módulo de Proveedores</title>
</head>
<body>
    <h1>Lista de Proveedores</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Dirección</th>
        </tr>
        <?php foreach ($proveedores as $proveedor) { ?>
            <tr>
                <td><?php echo $proveedor->getId(); ?></td>
                <td><?php echo $proveedor->getNombre(); ?></td>
                <td><?php echo $proveedor->getTelefono(); ?></td>
                <td><?php echo $proveedor->getCorreo(); ?></td>
                <td><?php echo $proveedor->getDireccion(); ?></td>
            </tr>
        <?php } ?>
    </table>
</body>
</html>