<?php

include "conexion.php";

$conn = new Conexion();

$consulta = $conn->ejecutarConsulta("SELECT * FROM proveedor");

switch ($_POST["opcion"]) {
    case 'mostrar':
        echo json_encode(["cod"=>1, "resultado"=>$conn->obtenerArreglo($consulta, MYSQLI_ASSOC)]);

        break;
    
    default:
        echo json_encode(["cod"=>0, "mensaje"=>"No existe la opción mandada"]);
        break;
}
