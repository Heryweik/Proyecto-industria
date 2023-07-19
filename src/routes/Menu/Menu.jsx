/* import { Link } from "react-router-dom"; */
import style from "./menuStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import empleados from "../../assets/img/emple.svg";

export default function Menu() {
  return (
    <div className={style.containerFluid}>
      <NavBar/>
      <main className={style.main}>
      <div className={style.card}>
        <div className={style.img}>
        <img src={empleados} alt="" />
        </div>
        <span className={style.texto}>Empleados</span>
      </div>
      <div className={style.card}>
        <div className={style.img}>
        <img src={empleados} alt="" />
        </div>
        <span className={style.texto}>Empleados</span>
      </div>
      <div className={style.card}>
        <div className={style.img}>
        <img src={empleados} alt="" />
        </div>
        <span className={style.texto}>Empleados</span>
      </div>
      <div className={style.card}>
        <div className={style.img}>
        <img src={empleados} alt="" />
        </div>
        <span className={style.texto}>Empleados</span>
      </div>
      <div className={style.card}>
        <div className={style.img}>
        <img src={empleados} alt="" />
        </div>
        <span className={style.texto}>Empleados</span>
      </div>
      <div className={style.card}>
        <div className={style.img}>
        <img src={empleados} alt="" />
        </div>
        <span className={style.texto}>Empleados</span>
      </div>
      </main>
      <Footer className={style.footer}/>
    </div>
  );
}
