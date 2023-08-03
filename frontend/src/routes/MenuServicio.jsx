/* import { Link } from "react-router-dom"; */
import style from "./menuStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import servicios from "../assets/img/services.svg";
import { Link } from "react-router-dom";

export default function MenuServicio() {
  return (
    <div className={style.containerFluid}>
      <NavBar />
      <main className={style.main}>
        <Link to={"/servicios"}>
        <div className={style.card}>
          <div className={style.img}>
            <img src={servicios} alt="" />
          </div>
          <span className={style.texto}>Citas</span>
        </div>
        </Link>
        <Link to={"/ventas"}>
        <div className={style.card}>
          <div className={style.img}>
            <img src={servicios} alt="" />
          </div>
          <span className={style.texto}>Administrar Citas</span>
        </div>
        </Link>
      </main>
      <Footer className={style.footer} />
    </div>
  );
}
