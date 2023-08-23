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
        producto: req.body.producto,
        cantidad: req.body.cantidad,
        total: req.body.total
    };

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO Ventas SET ?', [data], (err, venta) => {
            console.log(venta);
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

        conn.query("SELECT * FROM Ventas WHERE usuario_id = ?", [id], (err, venta) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(venta);
            res.json(venta);
        });
    });
};


module.exports = controller;
