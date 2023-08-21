const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'bd-proyecto.cs5mqlupmen8.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'admin123',
    port: 3306,
    database: 'Industria1'
});

const controller = {};

controller.list = (req, res) => {
    pool.getConnection((err, conn) => {
        if (err) {
            res.json(err);
            return;
        }

        conn.query('SELECT * FROM servicio', (err, servicios) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(servicios);
            res.send('Obteniendo todos los servicios');
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO servicio SET ?', [data], (err, servicio) => {
            console.log(servicio);
            res.send('works')
        });
    });

};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM servicio WHERE id = ?", [id], (err, rows) => {
      });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newservicio = req.body;
    req.getConnection((err, conn) => {

    conn.query('UPDATE servicio set ? where id = ?', [newservicio, id], (err, rows) => {
      res.redirect('/');
    });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM servicio WHERE id = ?', [id], (err, rows) => {
        res.redirect('/');
      });
    });
};

module.exports = controller;
