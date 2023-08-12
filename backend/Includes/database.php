<?php

$db = mysqli_connect('bd-proyecto.cs5mqlupmen8.us-east-1.rds.amazonaws.com', 'admin', 'admin123', 'Industria');


if (!$db) { 
    echo "Error: No se pudo conectar a MySQL.";
    echo "errno de depuración: " . mysqli_connect_errno();
    echo "error de depuración: " . mysqli_connect_error();
    exit;
}