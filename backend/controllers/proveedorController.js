const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'bd-proyecto.cs5mqlupmen8.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'admin123',
    port: 3306,
    database: 'Industria'
});

const controller = {};

controller.list = (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) {
            res.json(err);
            return;
        }

        conn.query('SELECT * FROM proveedor', (err, proveedores) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(proveedores);
            res.send('Obteniendo todos los proveedores');
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO proveedor SET ?', [data], (err, proveedor) => {
            console.log(proveedor);
            res.send('works')
        });
    });

};

module.exports = controller;
