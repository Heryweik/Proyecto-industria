<?php
// controllers/ProveedorController.php
//require_once('../models/Producto.php');
use Models\Producto;

class ProveedorController
{
    // Función para agregar un nuevo Producto
    public function agregarProducto($ID, $ID_Categoria, $Nombre, $Marca, $Descripcion, $Cantidad_disponible, $Precio_compra,$Precio_venta)
    {
        require_once('../database/db_connection.php');

        $Producto = new Producto($ID, $ID_Categoria, $Nombre, $Marca, $Descripcion, $Cantidad_disponible, $Precio_compra,$Precio_venta);

        if ($Producto->guardarProducto()) {
            return true;
        } else {
            return false;
        }
    }

    // Función para eliminar un proveedor por su ID
    public function eliminarProducto($id)
    {
        require_once('../database/db_connection.php');

        $sql = "DELETE FROM proveedores WHERE id = $id";

        if ($conn->query($sql) === TRUE) {
            return true;
        } else {
            return false;
        }
    }
}
?>