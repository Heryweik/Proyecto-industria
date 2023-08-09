<?php
// models/Proveedor.php

class Proveedor
{
    private $id;
    private $nombre;
    private $telefono;
    private $correo;
    private $direccion;

    // Constructor
    public function __construct($nombre, $telefono, $correo, $direccion)
    {
        $this->nombre = $nombre;
        $this->telefono = $telefono;
        $this->correo = $correo;
        $this->direccion = $direccion;
    }

    // Funciones getter y setter
    public function getId()
    {
        return $this->id;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    public function getTelefono()
    {
        return $this->telefono;
    }

    public function setTelefono($telefono)
    {
        $this->telefono = $telefono;
    }

    public function getCorreo()
    {
        return $this->correo;
    }

    public function setCorreo($correo)
    {
        $this->correo = $correo;
    }

    public function getDireccion()
    {
        return $this->direccion;
    }

    public function setDireccion($direccion)
    {
        $this->direccion = $direccion;
    }

    // Funciones para manejar la base de datos

    // Método para guardar el proveedor en la base de datos
    public function guardarProveedor()
    {
        require_once('database/db_connection.php');

        $sql = "INSERT INTO proveedores (nombre, telefono, correo, direccion) 
                VALUES ('$this->nombre', $this->telefono, '$this->correo', '$this->direccion')";

        if ($conn->query($sql) === TRUE) {
            $this->id = $conn->insert_id;
            return true;
        } else {
            return false;
        }
    }

    // Método para eliminar el proveedor de la base de datos
    public function eliminarProveedor()
    {
        require_once('database/db_connection.php');

        $sql = "DELETE FROM proveedores WHERE id = $this->id";

        if ($conn->query($sql) === TRUE) {
            return true;
        } else {
            return false;
        }
    }

    // Método para obtener la cantidad de productos vendidos de este proveedor
    public function getCantidadProductosVendidos()
    {
        require_once('database/db_connection.php');

        $sql = "SELECT COUNT(*) AS cantidad FROM productos WHERE proveedor_id = $this->id AND vendido = 1";

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            return $row['cantidad'];
        } else {
            return 0;
        }
    }

    // Método para obtener la cantidad de productos disponibles de este proveedor
    public function getCantidadProductosDisponibles()
    {
        require_once('database/db_connection.php');

        $sql = "SELECT COUNT(*) AS cantidad FROM productos WHERE proveedor_id = $this->id AND vendido = 0";

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            return $row['cantidad'];
        } else {
            return 0;
        }
    }
}
?>