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

        conn.query('SELECT * FROM Clientes', (err, usuarios) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(usuarios);
            res.json(usuarios);
        });
    });
};

controller.save = (req, res) => {
    const data = {
        usuario_id: req.body.usuario_id,
        DNI: req.body.DNI,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        direccion: req.body.direccion,
        edad: req.body.edad
    };

    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO Clientes SET ?', [data], (err, usuario) => {
            console.log(usuario);
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

        conn.query("SELECT * FROM Clientes WHERE usuario_id = ?", [id], (err, usuarios) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(usuarios);
            res.json(usuarios);
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
        const newcliente = {
            usuario_id: req.body.usuario_id,
            DNI: req.body.DNI,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo,
            direccion: req.body.direccion,
            edad: req.body.edad
        };

        conn.query('UPDATE Clientes set ? where cliente_id = ?', [newcliente, id], (err, usuarios) => {
            conn.release();

            if (err) {
                res.json(err);
                return;
            }

            console.log(usuarios);
            res.json(usuarios);
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM Usuarios WHERE usuario_id = ?', [id], (err, rows) => {
        res.redirect('');
      });
    });
};

module.exports = controller;
