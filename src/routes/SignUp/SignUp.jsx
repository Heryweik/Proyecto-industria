import { Link } from "react-router-dom";
import style from "./signupStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { FaChevronLeft } from "react-icons/fa";
import logo from "../../assets/img/logoC.jpeg";
import lo from "../../assets/img/logo.jpeg";

export default function SignUp() {
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
        <form className={style.form}>
          <Link to={"/"}>
            <FaChevronLeft className={style.icon} />
          </Link>
          <div className={style.img2}>
          <img src={lo} alt="" className={style.logo} />
        </div>
          <h1 className={style.saludo}>Registrate</h1>
          <div className={`${style.formInput}`}>
            
            <input
              type="text"
              className={`form-control ${style.inNombre}`}
              id="exampleInputEmail"
              aria-describedby="emailHelp"
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>Nombre de usuario</label>
          </div>
          <div className={`${style.formInput}`}>
            
            <input
              type="email"
              className={`form-control ${style.inNombre}`}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>Correo</label>
          </div>
          <div className={`${style.formInput}`}>
            <input
              type="password"
              className={`form-control ${style.inNombre}`}
              id="exampleInputPassword1"
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>Contrasenia</label>
          </div>
          <div className={`${style.formInput}`}>
            <input
              type="password"
              className={`form-control ${style.inNombre}`}
              id="exampleInputPassword"
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>Confirmar ontrasenia</label>
          </div>

          
          <div className={style.boton}>
            <Link to={"/menu"}>
              <button className={style.iSesion} type="submit">
                Registrarse
              </button>
            </Link>
          </div>

          <div className={style.footer}>
            <p>
              @Copyright
            </p>
            
          </div>
        </form>
      </div>
    </div>
  );
}
