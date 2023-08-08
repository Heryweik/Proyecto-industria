/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import style from "./signupStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { FaChevronLeft } from "react-icons/fa";
import logo from "../../assets/img/logoC.jpeg";
import lo from "../../assets/img/logo.jpeg";
import { useForm } from "react-hook-form";
import classNames from "classnames";
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
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [modalShow, setModalShow] = React.useState(false);

  function insertar() {
    // Aquí puedes manejar la lógica de inserción de datos
  }

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

        <form className={style.form} onSubmit={handleSubmit(insertar)}>
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
              className={classNames("form-control", style.inNombre, {
                [style.error]: errors.nombre
              })}
              id="nombre"
              aria-describedby="emailHelp"
              {...register("nombre", {
                required: "Ingrese un nombre",
                pattern: {
                  value: /^(?!.*(.).*\1)[A-Za-z]+$/, // Expresión regular que solo permite letras y espacios
                 message: "Ingreso numeros o un nombre no valido",
                 
                },
                
                minLength: { value: 3, message: "Ingrese más de 2 caracteres" },
                maxLength: { value: 20, message: "No más de 20 caracteres" }
              })}
            />
            {errors.nombre && <p className={style.errorMessage}>🚫{errors.nombre.message}</p>}
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Nombre:
            </label>
          </div>
          
          <div className={`${style.formInput}`}>
            <input
              type="text"
              className={classNames("form-control", style.inNombre, {
                [style.error]: errors.apellido
              })}
              id="apellido"
              aria-describedby="emailHelp"
              {...register("apellido", {
                required: "Ingrese un apellido",
                pattern: {
                  value: /^(?!.*(.).*\1)[A-Za-z]+$/,
                  message: "Ingreso numeros o un apellido no valido"
                },
                minLength: { value: 2, message: "Ingrese más de 1 caracter" },
                maxLength: { value: 20, message: "No más de 20 caracteres" }
              })}
            />
            {errors.apellido && <p className={style.errorMessage}>🚫{errors.apellido.message}</p>}
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Apellido:
            </label>
          </div>

          <div className={`${style.formInput}`}>
            <input
              type="email"
              className={classNames("form-control", style.inNombre, {
                [style.error]: errors.correo
              })}
              id="correo"
              aria-describedby="emailHelp"
              {...register("correo", {
                required: "Ingrese un correo",
                minLength: { value: 2, message: "Ingrese más de 2 caracteres" },
                maxLength: { value: 50, message: "No más de 50 caracteres" },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Ingrese un correo válido"
                }
              })}
            />
            {errors.correo && <p className={style.errorMessage}>🚫{errors.correo.message}</p>}
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Correo:
            </label>
          </div>

          <div className={`${style.formInput}`}>
            <input
              type="password"
              className={classNames("form-control", style.inNombre, {
                [style.error]: errors.contra
              })}
              id="contra"
              {...register("contra", {
                required: "Ingrese una contraseña",
                minLength: { value: 6, message: "La contraseña debe tener al menos 6 caracteres" },
                maxLength: { value: 20, message: "No más de 20 caracteres" }
              })}
            />
            {errors.contra && <p className={style.errorMessage}>🚫{errors.contra.message}</p>}
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Contrasenia:
            </label>
          </div>
    

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
            <button className={style.iSesion} type="submit">
              Registrarse
            </button>
          </div>

          <div className={style.footer}>
            <p>@Copyright</p>
          </div>
        </form>
      </div>
    </div>
  );
}