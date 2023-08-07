<?php
// views/add_product.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    require_once('../controllers/ProductController.php');
    $productController = new ProductController();
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $correo = $_POST['correo'];
    $direccion = $_POST['direccion'];
    $productController->agregarProducto($nombre, $telefono, $correo, $direccion);
    header("Location: product_list.php");
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Agregar Producto</title>
</head>
<body>
    <h1>Agregar Producto</h1>
    <form method="post" action="">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" required><br>
        <label for="telefono">Teléfono:</label>
        <input type="text" name="telefono" required><br>
        <label for="correo">Correo:</label>
        <input type="email" name="correo" required><br>
        <label for="direccion">Dirección:</label>
        <input type="text" name="direccion" required><br>
        <input type="submit" value="Agregar">
    </form>
</body>
</html>