<?php
// controllers/ProveedorController.php
require_once('../models/Proveedor.php');

class ProveedorController
{
    // Función para obtener la cantidad de productos vendidos de este proveedor
    public function getCantidadProductosVendidos($proveedorId)
    {
        require_once('../database/db_connection.php');

        $sql = "SELECT COUNT(*) AS cantidad FROM productos WHERE proveedor_id = $proveedorId AND vendido = 1";

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            return $row['cantidad'];
        } else {
            return 0;
        }
    }

    // Función para obtener la cantidad de productos disponibles de este proveedor
    public function getCantidadProductosDisponibles($proveedorId)
    {
        require_once('../database/db_connection.php');

        $sql = "SELECT COUNT(*) AS cantidad FROM productos WHERE proveedor_id = $proveedorId AND vendido = 0";

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            return $row['cantidad'];
        } else {
            return 0;
        }
    }

    // Función para agregar un nuevo proveedor
    public function agregarProveedor($nombre, $telefono, $correo, $direccion)
    {
        require_once('../database/db_connection.php');

        $proveedor = new Proveedor($nombre, $telefono, $correo, $direccion);

        if ($proveedor->guardarProveedor()) {
            return true;
        } else {
            return false;
        }
    }

    // Función para eliminar un proveedor por su ID
    public function eliminarProveedor($id)
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