/* import { Link } from "react-router-dom"; */
import style from "./menuStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import empleados from "../../assets/img/empleados.svg";
import cliente from "../../assets/img/user.svg";
import provee from "../../assets/img/proveedor.svg";
import servicios from "../../assets/img/services.svg";
import ventas from "../../assets/img/ventas.svg";
import product from "../../assets/img/products.svg";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className={style.containerFluid}>
      <NavBar />
      <main className={style.main}>
        <Link to={"/clientes"}>
          <div className={style.card}>
            <div className={style.img}>
              <img src={cliente} alt="" />
            </div>
            <span className={style.texto}>Clientes</span>
          </div>
        </Link>
        <Link to={"/proveedores"}>
        <div className={style.card}>
          <div className={style.img}>
            <img src={provee} alt="" />
          </div>
          <span className={style.texto}>Proveedores</span>
        </div>
        </Link>
        <Link to={"/empleados"}>
        <div className={style.card}>
          <div className={style.img}>
            <img src={empleados} alt="" />
          </div>
          <span className={style.texto}>Empleados</span>
        </div>
        </Link>
        <Link to={"/productos"}>
        <div className={style.card}>
          <div className={style.img}>
            <img src={product} alt="" />
          </div>
          <span className={style.texto}>Productos</span>
        </div>
        </Link>
        <Link to={"/servicios"}>
        <div className={style.card}>
          <div className={style.img}>
            <img src={servicios} alt="" />
          </div>
          <span className={style.texto}>Mantenimientos</span>
        </div>
        </Link>
        <Link to={"/ventas"}>
        <div className={style.card}>
          <div className={style.img}>
            <img src={ventas} alt="" />
          </div>
          <span className={style.texto}>Ventas</span>
        </div>
        </Link>
      </main>
      <Footer className={style.footer} />
    </div>
  );
}
