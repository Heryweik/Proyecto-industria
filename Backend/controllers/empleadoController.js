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

        conn.query('SELECT * FROM Empleados', (err, empleados) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(empleados);
            res.json(empleados);
        });
    });
};

controller.save = (req, res) => {
    const data = {
        usuario_id: req.body.usuario_id,
        DNI: req.body.DNI,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        correo: req.body.correo,
        direccion: req.body.direccion,
        horario: req.body.horario,
        vacaciones: req.body.vacaciones,
    };

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO Empleados SET ?', [data], (err, empleado) => {
            console.log(empleado);
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

        conn.query("SELECT * FROM Empleados WHERE usuario_id = ?", [id], (err, empleados) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(empleados);
            res.json(empleados);
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
        const newempleado = {
            usuario_id: req.body.usuario_id,
            DNI: req.body.DNI,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            telefono: req.body.telefono,
            correo: req.body.correo,
            direccion: req.body.direccion,
            horario: req.body.horario,
            vacaciones: req.body.vacaciones,
        };

        conn.query('UPDATE Empleados set ? where empleado_id = ?', [newempleado, id], (err, empleados) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(empleados);
            res.json(empleados);
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

        connection.query('DELETE FROM Empleados WHERE empleado_id = ?', [id], (err, result) => {
            if (err) {
                console.error('Error al eliminar el empleado:', err);
                return res.status(500).json({ error: 'Error al eliminar el empleado' });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Empleado no encontrado' });
            }

            res.status(200).json({ message: 'Empleado eliminado correctamente' });
        });
    });
};


module.exports = controller;
