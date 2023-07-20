import { Link } from "react-router-dom";
import style from "./loginStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { FaChevronLeft } from "react-icons/fa";
import logo from "../../assets/img/logoC.jpeg";
import lo from "../../assets/img/logo.jpeg";

export default function LogIn() {
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
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>Nombre de usuario:</label>
          </div>
          <div className={`${style.formInput}`}>
            <input
              type="password"
              className={`form-control ${style.inNombre}`}
              id="exampleInputPassword1"
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>Contrasenia:</label>
          </div>
          <div className={style.boton}>
            <Link to={"/menu"}>
              <button className={style.iSesion} type="submit">
                Iniciar sesion
              </button>
            </Link>
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
