import { Link } from "react-router-dom";
import style from "./signupStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { FaChevronLeft } from "react-icons/fa";
import logo from "../../assets/img/logoC.jpeg";

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
        style={{ width: "40%" }}
      >
        <Link to={"/"}>
          <FaChevronLeft className={style.icon} />
        </Link>

        <div className={style.botones}>
          
        <div>
          <h1 className={style.saludo}>Registrarse</h1>
        </div>
          <form className={style.form}>
            <div className="mb-2">
              <label className="form-label">Nombre de usuario</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Fecha de nacimiento</label>
              <input
                type="date"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Contrasenia</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            
            <div className="mb-2">
              <label className="form-label">Confirmar contrasenia</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className={style.boton}>
              <button className={style.iSesion} type="submit">
                Crear cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
