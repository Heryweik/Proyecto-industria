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

        conn.query('SELECT * FROM Proveedores', (err, proveedores) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(proveedores);
            res.json(proveedores);
        });
    });
};

controller.save = (req, res) => {
    const data = {
        usuario_id: req.body.usuario_id,
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        correo: req.body.correo,
        direccion: req.body.direccion,
    };

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO Proveedores SET ?', [data], (err, proveedor) => {
            console.log(proveedor);
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

        conn.query("SELECT * FROM Proveedores WHERE usuario_id = ?", [id], (err, proveedores) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(proveedores);
            res.json(proveedores);
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
        const newproveedor = {
            usuario_id: req.body.usuario_id,
            nombre: req.body.nombre,
            telefono: req.body.telefono,
            correo: req.body.correo,
            direccion: req.body.direccion
        };

        conn.query('UPDATE Proveedores set ? where proveedor_id = ?', [newproveedor, id], (err, proveedores) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(proveedores);
            res.json(proveedores);
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

        connection.query('DELETE FROM Proveedores WHERE proveedor_id = ?', [id], (err, result) => {
            if (err) {
                console.error('Error al eliminar el proveedor:', err);
                return res.status(500).json({ error: 'Error al eliminar el proveedor' });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Proveedor no encontrado' });
            }

            res.status(200).json({ message: 'Proveedor eliminado correctamente' });
        });
    });
};


module.exports = controller;
