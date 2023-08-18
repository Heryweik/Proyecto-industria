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

        conn.query('SELECT * FROM usuario', (err, usuarios) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(usuarios);
            res.send('Obteniendo todos los usuarios');
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO usuario SET ?', [data], (err, usuario) => {
            console.log(usuario);
            res.send('works')
        });
    });

};

module.exports = controller;
