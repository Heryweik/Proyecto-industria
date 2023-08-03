import "bootstrap/dist/css/bootstrap.css";
import style from "./navbarStyle.module.css";
import logo from "../../assets/img/logoCode.jpeg";
import logo2 from "../../assets/img/logo.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPowerOff } from "react-icons/fa";

export default function NavBar() {
  const [abierto, setAbierto] = useState(false);

  const toggleAcordeon = () => {
    setAbierto(!abierto);
  };

  return (
    <div className={style.Nav}>
      <div>
      <div className={style.info}>
        <div style={{ display: 'flex', gap: '1rem'}}>
        <Link to={"/menu"}>
          <img src={logo} alt="" className={style.logo} />
          <img src={logo2} alt="" className={style.logo2} />
        </Link>
        <Link to={"/clientes"}>
          <button className={style.boton}>Clientes</button>
        </Link>
        <Link to={"/proveedores"}>
          <button className={style.boton}>Proveedores</button>
        </Link>
        <Link to={"/productos"}>
          <button className={style.boton}>Productos</button>
        </Link>
        <Link to={"/servicios"}>
          <button className={style.boton}>Servicios</button>
        </Link>
        <Link to={"/ventas"}>
          <button className={style.boton}>Ventas</button>
        </Link>
        <Link to={"/empleados"}>
          <button className={style.boton}>Empleados</button>
        </Link>
        </div>

        <div className={style.nombre}>
        <span className={style.usuario}>Yhonny Yupanky</span>
        <Link to={"/"}>
          <button className={`btn ${style.sesion}`}>Cerrar Sesion</button>
        </Link>
        <Link to={"/"}>
          <button className={`btn ${style.sesion2}` }><FaPowerOff/></button>
        </Link>
      </div>
      </div>

      
      </div>
      <div>
      <div className={style.acordeon}>
          <button className={style.titulo} onClick={toggleAcordeon}>
            Menu
          </button>
          {abierto && (
            <div className={style.contenido}>
              <Link to={"/clientes"}>
                <button className={style.boton2}>Clientes</button>
              </Link>
              <Link to={"/proveedores"}>
                <button className={style.boton2}>Proveedores</button>
              </Link>
              <Link to={"/productos"}>
                <button className={style.boton2}>Productos</button>
              </Link>
              <Link to={"/servicios"}>
                <button className={style.boton2}>Servicios</button>
              </Link>
              <Link to={"/ventas"}>
                <button className={style.boton2}>Ventas</button>
              </Link>
              <Link to={"/empleados"}>
                <button className={style.boton2}>Empleados</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
