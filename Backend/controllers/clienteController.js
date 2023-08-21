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

      conn.query('SELECT * FROM Clientes', (err, clientes) => {
          conn.release();

          if (err) {
              res.json(err);
              return;
          }

          console.log(clientes);
          res.json(clientes);
      });
  });
};

controller.save = (req, res) => {
  const data = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      correo: req.body.correo,
      contrasenia: req.body.contrasenia,
      suscripcion: req.body.suscripcion
  };

  req.getConnection((err, conn) =>{
      conn.query('INSERT INTO Usuarios SET ?', [data], (err, usuario) => {
          console.log(usuario);
          res.send('works')
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

      conn.query("SELECT * FROM Usuarios WHERE usuario_id = ?", [id], (err, usuarios) => {
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
      const newusuario = {
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          correo: req.body.correo,
          contrasenia: req.body.contrasenia,
          suscripcion: req.body.suscripcion
      };

      conn.query('UPDATE Usuarios set ? where usuario_id = ?', [newusuario, id], (err, usuarios) => {
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
