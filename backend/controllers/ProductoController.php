<?php
// controllers/ProveedorController.php

namespace Controllers;

require_once('../models/Producto.php');
use Model\Producto;

class ProveedorController
{
    // Función para agregar un nuevo Producto
    public static function agregarProducto($ID, $ID_Categoria, $Nombre, $Marca, $Descripcion, $Cantidad_disponible, $Precio_compra,$Precio_venta)
    {
        require_once('../database/db_connection.php');

        $producto = new Producto($ID, $ID_Categoria, $Nombre, $Marca, $Descripcion, $Cantidad_disponible, $Precio_compra,$Precio_venta);

        if ($producto->guardarProducto()) {
            return true;
        } else {
            return false;
        }
    }

    // Función para eliminar un proveedor por su ID
    public static function eliminar() {

        if($_SERVER['REQUEST_METHOD'] === 'POST') {
            $id = $_POST['id'];
            $producto = Producto::find($id);
            $producto->eliminar();
            header('Location: /Producto');
        }
    }
}
?>