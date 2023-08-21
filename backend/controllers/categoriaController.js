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

        conn.query('SELECT * FROM categoria', (err, categorias) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(categorias);
            res.send('Obteniendo todos las categorias');
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO categoria SET ?', [data], (err, categoria) => {
            console.log(categoria);
            res.send('works')
        });
    });

};


controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM categoria WHERE id = ?", [id], (err, rows) => {
      });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newcategoria = req.body;
    req.getConnection((err, conn) => {

    conn.query('UPDATE categoria set ? where id = ?', [newcategoria, id], (err, rows) => {
      res.redirect('/');
    });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM categoria WHERE id = ?', [id], (err, rows) => {
        res.redirect('/');
      });
    });
};


module.exports = controller;
