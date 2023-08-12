<?php
// views/product_list.php
require_once('../controllers/ProductController.php');

$productController = new ProductController();
$vendidos = $productController->getCantidadProductosVendidos();
$disponibles = $productController->getCantidadProductosDisponibles();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Lista de Productos</title>
</head>
<body>
    <h1>Lista de Productos</h1>
    <p>Cantidad de productos vendidos: <?php echo $vendidos; ?></p>
    <p>Cantidad de productos disponibles: <?php echo $disponibles; ?></p>
    <!-- Aquí mostrar la lista completa de productos -->
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Proveedor</th>
                <th>Precio</th>
                <th>Stock</th>
            </tr>
        </thead>
        <tbody>
            <?php
            // Obtener la lista completa de productos desde el controlador
            $productos = $productController->obtenerListaProductos();

            foreach ($productos as $producto) {
                echo "<tr>";
                echo "<td>" . $producto['ID'] . "</td>";
                echo "<td>" . $producto['Nombre'] . "</td>";
                echo "<td>" . $producto['Proveedor'] . "</td>";
                echo "<td>" . $producto['Precio'] . "</td>";
                echo "<td>" . $producto['Stock'] . "</td>";
                echo "</tr>";
            }
            ?>
        </tbody>
    </table>
    <p><a href="add_product.php">Agregar nuevo producto</a></p>
</body>
</html>