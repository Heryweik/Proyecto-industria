import { Link } from "react-router-dom";
import style from "./homeStyle.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../assets/img/logoC.jpeg';

export default function Home() {
  return (
    <div className={style.containerFluid}>
      <div className={style.medium}>
        <div className={style.img}>
        <img src={logo} alt="" className={style.logo}/>
        </div>
      </div>

      <div className={`${style.medium} ${style.bienvenido}`} style={{ width: "40%" }}>
        <div>
          <h1 className={style.saludo}>Bienvenido</h1>
        </div>

        <div className={style.botones}>
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
        </div>

        <p>@Copyrigth</p>
      </div>
    </div>
  );
}
