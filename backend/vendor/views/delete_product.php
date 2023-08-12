<?php
// views/delete_product.php
if (isset($_GET['id'])) {
    require_once('../controllers/ProductController.php');
    $productController = new ProductController();
    $productController->eliminarProducto($_GET['id']);
    header("Location: product_list.php");
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Eliminar Producto</title>
</head>
<body>
    <h1>Eliminar Producto</h1>
    <p><a href="product_list.php">Volver a la lista</a></p>
</body>
</html>
