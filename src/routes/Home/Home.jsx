import { Link } from "react-router-dom";
import style from "./homeStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../assets/img/logoC.jpeg";

export default function Home() {
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

        <div className={style.img2}>
          <img src={logo} alt="" className={style.logo} />
        </div>
        <div>
          <h1 className={style.saludo}>Bienvenido</h1>
        </div>
        <div className={style.boton}>
          <Link to={"/login"}>
            <button className={style.iSesion}>Iniciar sesión</button>
          </Link>
        </div>
        <div className={style.boton}>
          <Link to={"/signup"}>
            <button className={style.iSesion}>Registrarse</button>
          </Link>
        </div>
        
      <div className={style.footer}>
        <p>@Copyright</p>
      </div>
      </div>
    </div>
  );
}
