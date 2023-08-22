import { Link, useNavigate } from 'react-router-dom';
import style from "./loginStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { FaChevronLeft } from "react-icons/fa";
import logo from "../../assets/img/logoC.jpeg";
import lo from "../../assets/img/logo.jpeg";

import { useState } from 'react';
import axios from 'axios';

export default function LogIn() {
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/usuarios/login', {
        correo,
        contrasenia
      });
      
      console.log(response.data.message); // Manejar la respuesta del servidor

      // Si la respuesta es exitosa, redirige al usuario a la pantalla "menu"
      if (response.data.message === 'Inicio de sesión exitoso') {
        navigate('/menu/' + response.data.idUsuario);
        setShowAlert2(true);
      } 
      
      if (response.data.message === 'Credenciales inválidas'){
        setShowAlert(true); // Manejar caso de credenciales incorrectas
      }
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      setShowAlert(true);
    }
  };

  return (
    <div className={style.containerFluid}>
      <div className={style.medium}>
        <div className={style.img}>
          <img src={logo} alt="" className={style.logo} />
        </div>
      </div>

      <div
        className={`${style.medium} ${style.bienvenido}`}
      >
        <div className={style.c1}></div>
        <div className={style.c2}></div>
        <div className={style.c3}></div>
        <div className={style.c4}></div>

        <form className={style.form}>
          <Link to={"/"}>
            <FaChevronLeft className={style.icon} />
          </Link>
          <div className={style.img2}>
          <img src={lo} alt="" className={style.logo} />
        </div>
          <h1 className={style.saludo}>Iniciar sesion</h1>
          <div className={`${style.formInput}`}>

            <input
              type="text"
              className={`form-control ${style.inNombre}`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>Correo:</label>
          </div>
          <div className={`${style.formInput}`}>
            <input
              type="password"
              className={`form-control ${style.inNombre}`}
              id="exampleInputPassword1"
              value={contrasenia}
              onChange={(e) => setContrasenia(e.target.value)}
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>Contraseña:</label>
          </div>
          
        {showAlert && (
        <div className={`alert alert-danger ${style.alert}`} role="alert">
          Credenciales inválidas!
        </div>
      )}
      {showAlert2 && (
        <div className={`alert alert-success ${style.alert}`} role="alert">
          Credenciales inválidas!
        </div>
      )}
          <div className={style.boton}>
              <button className={style.iSesion} type="button" onClick={handleLogin}>
                Iniciar sesion
              </button>
          </div>

          <div className={style.footer}>
            <p style={{ fontWeight: "lighter", marginBottom: "-3px" }}>
              Todavia no eres usuario?
            </p>
            <Link to={"/signup"} className={style.link}>
              <p style={{ fontWeight: "bold" }}>Registrate aqui</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
