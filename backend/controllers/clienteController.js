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

        conn.query('SELECT * FROM cliente', (err, clientes) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(clientes);
            res.send('Obteniendo todos los clientes');
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, connection) => {
      const query = connection.query('INSERT INTO cliente set ?', data, (err, cliente) => {
        console.log(cliente)
        res.redirect('/');
      })
    })
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM cliente WHERE id = ?", [id], (err, rows) => {
      });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newcliente = req.body;
    req.getConnection((err, conn) => {

    conn.query('UPDATE cliente set ? where id = ?', [newcliente, id], (err, rows) => {
      res.redirect('/');
    });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM cliente WHERE id = ?', [id], (err, rows) => {
        res.redirect('/');
      });
    });
};

module.exports = controller;
