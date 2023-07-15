import { Link } from "react-router-dom";
import style from "./loginStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { FaChevronLeft } from "react-icons/fa";
import logo from "../../assets/img/logoC.jpeg";

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
        style={{ width: "40%" }}
      >
        <Link to={"/"}>
          <FaChevronLeft className={style.icon} />
        </Link>

        <div className={style.botones}>
            
        <div>
          <h1 className={style.saludo}>Iniciar sesion</h1>
        </div>
          <form className={style.form}>
            <div className="mb-3">
              <label className="form-label mb-0">Nombre de usuario</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label className="form-label mb-0">Contrasenia</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className={style.boton}>
            <Link to={"/menu"}>
              <button className={style.iSesion} type="submit">
                Iniciar sesion
              </button>
              </Link>
            </div>
          </form>
        </div>
        <div className={style.footer}>
          <p style={{ fontWeight: "lighter", marginBottom: "-6px" }}>
            Todavia no eres usuario?
          </p>
          <Link to={"/signup"}>
            <p style={{ fontWeight: "bold" }}>Registrate aqui</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
