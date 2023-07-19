import "bootstrap/dist/css/bootstrap.css";
import style from "./navbarStyle.module.css";
import logo from "../../assets/img/logoCode.jpeg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={style.Nav}>
      <div className={style.info}>
        <img src={logo} alt="" className={style.logo} />
        <button className={style.boton}>Clientes</button>
        <button className={style.boton}>Proveedores</button>
        <button className={style.boton}>Productos</button>
        <button className={style.boton}>Servicios</button>
        <button className={style.boton}>Ventas</button>
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
