const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'bd-proyecto.cs5mqlupmen8.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'admin123',
    port: 3306,
    database: 'DentalServices'
});

const controller = {};

controller.save = (req, res) => {
    const data = {
        usuario_id: req.body.usuario_id,
        cliente: req.body.cliente,
        fecha_hora: req.body.fecha_hora,
        descripcion: req.body.descripcion,
        direccion: req.body.direccion,
        empleado: req.body.empleado
    };

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO Mantenimientos SET ?', [data], (err, mantenimiento) => {
            console.log(mantenimiento);
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

        conn.query("SELECT * FROM Mantenimientos WHERE usuario_id = ?", [id], (err, mantenimiento) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(mantenimiento);
            res.json(mantenimiento);
        });
    });
};

module.exports = controller;
