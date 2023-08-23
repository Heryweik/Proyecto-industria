const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'bd-proyecto.cs5mqlupmen8.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'admin123',
    port: 3306,
    database: 'DentalServices'
});

const controller = {};

controller.list = (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) {
            res.json(err);
            return;
        }

        conn.query('SELECT * FROM Productos', (err, productos) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(productos);
            res.json(productos);
        });
    });
};

controller.save = (req, res) => {
    const data = {
        usuario_id: req.body.usuario_id,
        nombre: req.body.nombre,
        marca: req.body.marca,
        descripcion: req.body.descripcion,
        cantidad: req.body.cantidad,
        precio_compra: req.body.precio_compra,
        precio_venta: req.body.precio_venta
    };

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO Productos SET ?', [data], (err, producto) => {
            console.log(producto);
            res.send({ message:'works'})
        });
    });

};

controller.edit = (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) {
            res.json(err);
            return;
        }

        const { id } = req.params;

        conn.query("SELECT * FROM Productos WHERE usuario_id = ?", [id], (err, productos) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(productos);
            res.json(productos);
        });
    });
};

controller.update = (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) {
            res.json(err);
            return;
        }

        const { id } = req.params;
        const newproducto = {
            usuario_id: req.body.usuario_id,
            nombre: req.body.nombre,
            marca: req.body.marca,
            descripcion: req.body.descripcion,
            cantidad: req.body.cantidad,
            precio_compra: req.body.precio_compra,
            precio_venta: req.body.precio_venta
        };

        conn.query('UPDATE Productos set ? where producto_id = ?', [newproducto, id], (err, productos) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(productos);
            res.json(productos);
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
        if (err) {
            console.error('Error en la conexión a la base de datos:', err);
            return res.status(500).json({ error: 'Error en la conexión a la base de datos' });
        }

        connection.query('DELETE FROM Productos WHERE producto_id = ?', [id], (err, result) => {
            if (err) {
                console.error('Error al eliminar el producto:', err);
                return res.status(500).json({ error: 'Error al eliminar el producto' });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }

            res.status(200).json({ message: 'Producto eliminado correctamente' });
        });
    });
};

module.exports = controller;
