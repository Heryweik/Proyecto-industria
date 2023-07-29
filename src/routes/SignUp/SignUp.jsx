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

      <div className={`${style.medium} ${style.bienvenido}`}>
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
          <h1 className={style.saludo}>Registrate</h1>
          <div className={`${style.formInput}`}>
            <input
              type="text"
              className={`form-control ${style.inNombre}`}
              id="nombre"
              aria-describedby="emailHelp"
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Nombre:
            </label>
          </div>
          <div className={`${style.formInput}`}>
            <input
              type="text"
              className={`form-control ${style.inNombre}`}
              id="apellido"
              aria-describedby="emailHelp"
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Apellido:
            </label>
          </div>
          <div className={`${style.formInput}`}>
            <input
              type="text"
              className={`form-control ${style.inNombre}`}
              id="telefono"
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Telefono:
            </label>
          </div>
          <div className={`${style.formInput}`}>
            <select name="" id="cargo" className={`form-control ${style.inNombre}`}>
              <option value>Hola</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Selecciona un cargo:
            </label>
          </div>
          <div className={`${style.formInput}`}>
            <input
              type="email"
              className={`form-control ${style.inNombre}`}
              id="correo"
              aria-describedby="emailHelp"
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Correo:
            </label>
          </div>
          <div className={`${style.formInput}`}>
            <input
              type="password"
              className={`form-control ${style.inNombre}`}
              id="contra"
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Contrasenia:
            </label>
          </div>

          <div className={style.boton}>
            <Link to={"/menu"}>
              <button className={style.iSesion} type="submit">
                Registrarse
              </button>
            </Link>
          </div>

          <div className={style.footer}>
            <p>@Copyright</p>
          </div>
        </form>
      </div>
    </div>
  );
}
