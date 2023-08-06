/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import style from "./signupStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { FaChevronLeft } from "react-icons/fa";
import logo from "../../assets/img/logoC.jpeg";
import lo from "../../assets/img/logo.jpeg";

/* Bootstrap */
import Modal from "react-bootstrap/Modal";

function ModalSuscripciones(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={style.ModalHeader}>
        <Modal.Title id="example-custom-modal-styling-title">
          Selecciona un tipo de suscripcion:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={style.Modal}>
        <div className={style.plan}>
          <div className={style.card}>
            <div className={style.precio}>Gratis</div>
            <h3>FREE</h3>
            <p>5 min</p>
            <div className={style.elegir} onClick={props.onHide}>Elegir</div>
          </div>
          <div className={style.card}>
            <div className={style.precio}>5$</div>
            <h3>PRO</h3>
            <p>1 mes</p>
            <div className={style.elegir} onClick={props.onHide}>Elegir</div>
          </div>
          <div className={style.card}>
            <div className={style.precio}>100$</div>
            <h3>VIP</h3>
            <p>1 año</p>
            <div className={style.elegir} onClick={props.onHide}>Elegir</div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className={style.modalFooter}>
        <button className={style.sesion} onClick={props.onHide}>
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default function SignUp() {
  const [modalShow, setModalShow] = React.useState(false);

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
          <Link to={-1}>
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
          {/* <div className={`${style.formInput}`}>
            <select name="" id="cargo" className={`form-control ${style.inNombre}` }>
              <option value="Elige una opcion"></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Selecciona un cargo:
            </label>
          </div> */}

          <div className={style.botonSus}>
            <button
              className={style.iSesion}
              type="button"
              onClick={() => setModalShow(true)}
            >
              Tipo de suscripcion
            </button>
            <ModalSuscripciones
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>

          
          <div disabled>
            <p>tipo de suscripcion elegida: </p>
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
