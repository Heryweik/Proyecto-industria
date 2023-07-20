import "bootstrap/dist/css/bootstrap.css";
import style from "./navbarStyle.module.css";
import logo from "../../assets/img/logoCode.jpeg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={style.Nav}>
      <div className={style.info}>
        <Link to={"/menu"}>
        <img src={logo} alt="" className={style.logo} />
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
      </div>
    </div>
  );
}
