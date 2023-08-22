/* eslint-disable react/prop-types */
/* import { Link } from "react-router-dom"; */
import React from "react";
import style from "./empleadosStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import empleado from "../../assets/img/empleados.svg";
import { BiUserPlus, BiSolidPencil } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { BsFillTrashFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

/* Bootstrap */
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Modal from "react-bootstrap/Modal";

function ModalEliminar(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className={style.ModalHeader}>
        <h4>Deseas eliminar este empleado?</h4>
      </Modal.Body>
      <Modal.Footer className={style.modalFooter}>
        <button onClick={props.onHide} className={style.boton1}>
          No
        </button>
        <button className={style.sesion}>Si</button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalHorario(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className={style.ModalHeader}>
        <div className={style.container}>
          <div className={style.tabla}>
            {/* <!-- Cabeceras --> */}
            <div
              className={style.celda}
              style={{
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                fontWeight: "800",
              }}
            >
              Empleado
            </div>
            <div
              className={style.celda}
              style={{
                borderBottom: "1px solid black",
                fontWeight: "800",
              }}
            >
              Horario
            </div>

            {/* <!-- Filas de informacion --> */}
            <div
              className={style.celda}
              style={{ borderRight: "1px solid black" }}
            >
              Yhonny APlixcano
            </div>
            <div
              className={style.celda}
            >
              08:00am - 06:00pm
            </div>

            {/* <!-- Filas de informacion --> */}
            <div
              className={style.celda}
              style={{ borderRight: "1px solid black" }}
            >
              PRO
            </div>
            <div
              className={style.celda}
            >
              5
            </div>

          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className={style.modalFooter}>
        <button onClick={props.onHide} className={style.boton1}>
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalVacaciones(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className={style.ModalHeader}>
        <div className={style.container}>
          <div className={style.tabla}>
            {/* <!-- Cabeceras --> */}
            <div
              className={style.celda}
              style={{
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                fontWeight: "800",
              }}
            >
              Empleado
            </div>
            <div
              className={style.celda}
              style={{
                borderBottom: "1px solid black",
                fontWeight: "800",
              }}
            >
              Fecha
            </div>

            {/* <!-- Filas de informacion --> */}
            <div
              className={style.celda}
              style={{ borderRight: "1px solid black" }}
            >
              Yhonny APlixcano
            </div>
            <div
              className={style.celda}
            >
              20/08/2023
            </div>

            {/* <!-- Filas de informacion --> */}
            <div
              className={style.celda}
              style={{ borderRight: "1px solid black" }}
            >
              PRO
            </div>
            <div
              className={style.celda}
            >
              5
            </div>

          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className={style.modalFooter}>
        <button onClick={props.onHide} className={style.boton1}>
          Cerrar
        </button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalEditar(props) {
  const { register, formState: { errors }, handleSubmit, } = useForm();
  function insertar() {
    // Aquí puedes manejar la lógica de inserción de datos
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={style.ModalHeader}>
        <Modal.Title id="example-custom-modal-styling-title">
          Informacion del empleado
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={style.Modal}>
      <form className={style.Modal} onSubmit={handleSubmit(insertar)}>
        <div className={style.form}>
        <input
            type="text"
            className={`form-control ${style.inNombre} ${
              errors.nombre && style.error
            }`}
            id="DNI"
            {...register("DNI", {
              required: "Por favor ingresa una DNI",
              pattern: {
                value:/^\d{13}$/,
                message: "Por favor ingresa una DNI válida",
              },
              minLength: { value: 13, message: "Por favor ingresa una DNI válida" },
              maxLength: { value: 13, message: "Por favor ingresa una DNI válida" },
            })}
          />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          DNI:</label>
        {errors.DNI && (
            <span className={style.errorMessage}>{errors.DNI.message}</span>
          )}
        </div>
        <div className={style.form}>
        <input
          type="text"
          className={`form-control ${style.inNombre}`}
          id="nombre"
          {...register("nombre", {
            required: "Por favor ingres aun nombre",
            pattern: {
              value: /^(?!.*(.).*\1)[A-Za-z]+$/,
                 message: "Ingreso numeros o un nombre no valido",
            },
            minLength: { value: 3, message:  "Por favor ingresa más de 2 caracteres"},
            maxLength: { value: 20, message: "No más de 20 caracteres"},
          })}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Nombre:</label>
          {errors.nombre && (
            <span className={style.errorMessage}>{errors.nombre.message}</span>
          )}
        </div>
        <div className={style.form}>
        <input
          type="text"
          className={`form-control ${style.inNombre}`}
          id="apellido"
          {...register("apellido", {
            required: "Por favor ingresa un apellido",
            pattern: {
              value: /^(?!.*(.).*\1)[A-Za-z]+$/, 
                 message: "Ingreso numeros o un apellido no valido",
            },
            minLength: { value: 3, message:  "Por favor ingresamás de 2 caracteres"},
            maxLength: { value: 20, message: "No más de 20 caracteres"},
          })}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Apellido:</label>
          {errors.apellido && (
            <span className={style.errorMessage}>{errors.apellido.message}</span>
          )}
        </div>
        <div className={style.form}>
        <input
          type="number"
          className={`form-control ${style.inNombre}`}
          id="telefono"
          {...register("telefono", {
            required: "Por favor ingresa un número de teléfono",
            pattern: {
              value: /^\d{8}$/, 
              message: "Ingrese solo números",
            },
            minLength: { value: 8, message: "Por favor ingresa un número de teléfono"},
            maxLength: { value: 11, message: "Por favor ingresa un número de teléfono"},
          })}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Teléfono:</label>
          {errors.telefono && (
            <span className={style.errorMessage}>{errors.telefono.message}</span>
          )}
        </div>
        <div className={style.form}>
        <input
          type="email"
          className={`form-control ${style.inNombre}`}
          id="correo"
          aria-describedby="emailHelp"
          {...register("correo", {
            required: "Por favor ingresa un correo",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Ingrese un correo válido"
            },
            minLength: { value: 2, message: "Por favor ingresa un correo" },
            maxLength: { value: 50, message:"Por favor ingresa un correo" },
          })}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Correo:</label>
          {errors.correo && (
            <span className={style.errorMessage}>{errors.correo.message}</span>
          )}
        </div>
        <div className={style.form}>
        <input
          type="text"
          className={`form-control ${style.inNombre}`}
          id="direccion"
          {...register("direccion", {
            required: "Por favor ingresa un dirección",
            minLength: { value: 5, message: "Por favor ingresa de 5 caracteres" },
            maxLength: { value: 50, message:"Ingrese menos de 50 caracteres" },
          })}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Dirección:</label>
          {errors.direccion && (
            <span className={style.errorMessage}>{errors.direccion.message}</span>
          )}
        </div>
     
      <Modal.Footer className={style.modalFooter}>
        <button className={style.sesion}>Actualizar informacion</button>
      </Modal.Footer>
      </form>
      </Modal.Body>
    </Modal>
  );
}

function ModalAgregar(props) {
  const { register, formState: { errors }, handleSubmit, } = useForm();
  function insertar() {
    // Aquí puedes manejar la lógica de inserción de datos
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={style.ModalHeader}>
        <Modal.Title id="example-custom-modal-styling-title">
          Nuevo empleado
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={style.Modal}>
      <form className={style.Modal} onSubmit={handleSubmit(insertar)}>
        <div className={style.form}>
        <input
            type="text"
            className={`form-control ${style.inNombre} ${
              errors.nombre && style.error
            }`}
            id="DNI"
            {...register("DNI", {
              required: "Por favor ingresa una DNI",
              pattern: {
                value:/^\d{13}$/,
                message: "Por favor ingresa una DNI válida",
              },
              minLength: { value: 13, message: "Por favor ingresa una DNI válida" },
              maxLength: { value: 13, message: "Por favor ingresa una DNI válida" },
            })}
          />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          DNI:</label>
        {errors.DNI && (
            <span className={style.errorMessage}>{errors.DNI.message}</span>
          )}
        </div>
        <div className={style.form}>
        <input
          type="text"
          className={`form-control ${style.inNombre}`}
          id="nombre"
          {...register("nombre", {
            required: "Por favor ingres aun nombre",
            pattern: {
              value: /^(?!.*(.).*\1)[A-Za-z]+$/,
                 message: "Ingreso numeros o un nombre no valido",
            },
            minLength: { value: 3, message:  "Por favor ingresa más de 2 caracteres"},
            maxLength: { value: 20, message: "No más de 20 caracteres"},
          })}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Nombre:</label>
          {errors.nombre && (
            <span className={style.errorMessage}>{errors.nombre.message}</span>
          )}
        </div>
        <div className={style.form}>
        <input
          type="text"
          className={`form-control ${style.inNombre}`}
          id="apellido"
          {...register("apellido", {
            required: "Por favor ingresa un apellido",
            pattern: {
              value: /^(?!.*(.).*\1)[A-Za-z]+$/, 
                 message: "Ingreso numeros o un apellido no valido",
            },
            minLength: { value: 3, message:  "Por favor ingresamás de 2 caracteres"},
            maxLength: { value: 20, message: "No más de 20 caracteres"},
          })}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Apellido:</label>
          {errors.apellido && (
            <span className={style.errorMessage}>{errors.apellido.message}</span>
          )}
        </div>
        <div className={style.form}>
        <input
          type="number"
          className={`form-control ${style.inNombre}`}
          id="telefono"
          {...register("telefono", {
            required: "Por favor ingresa un número de teléfono",
            pattern: {
              value: /^\d{8}$/, 
              message: "Ingrese solo números",
            },
            minLength: { value: 8, message: "Por favor ingresa un número de teléfono"},
            maxLength: { value: 11, message: "Por favor ingresa un número de teléfono"},
          })}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Teléfono:</label>
          {errors.telefono && (
            <span className={style.errorMessage}>{errors.telefono.message}</span>
          )}
        </div>
        <div className={style.form}>
        <input
          type="email"
          className={`form-control ${style.inNombre}`}
          id="correo"
          aria-describedby="emailHelp"
          {...register("correo", {
            required: "Por favor ingresa un correo",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Ingrese un correo válido"
            },
            minLength: { value: 2, message: "Por favor ingresa un correo" },
            maxLength: { value: 50, message:"Por favor ingresa un correo" },
          })}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Correo:</label>
          {errors.correo && (
            <span className={style.errorMessage}>{errors.correo.message}</span>
          )}
        </div>
        <div className={style.form}>
        <input
          type="text"
          className={`form-control ${style.inNombre}`}
          id="direccion"
          {...register("direccion", {
            required: "Por favor ingresa un dirección",
            minLength: { value: 5, message: "Por favor ingresa de 5 caracteres" },
            maxLength: { value: 50, message:"Ingrese menos de 50 caracteres" },
          })}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Dirección:</label>
          {errors.direccion && (
            <span className={style.errorMessage}>{errors.direccion.message}</span>
          )}
        </div>
      <Modal.Footer className={style.modalFooter}>
        <button className={style.sesion}>Agregar</button>
      </Modal.Footer>
      </form>
      </Modal.Body>
    </Modal>
  );
}

export default function Empleados() {
  const [modalShow4, setModalShow4] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className={style.containerFluid}>
      <NavBar />
      <main className={style.main}>
      <Link to={-1}>
            <FaChevronLeft className={style.icon} />
          </Link>
        <div className={style.head}>
          <div className={style.junt}>
          <img src={empleado} alt="" className={style.img} />
            <span style={{ fontWeight: "700" }}>Empleados</span>
          </div>
          
          <div>
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Agregar empleado</Tooltip>}
            >
              <span className="d-inline-block">
                <button type="button" className={`btn ${style.sesion}`} onClick={() => setModalShow2(true)}>
                  <BiUserPlus />
                </button>
                <ModalAgregar
                  show={modalShow2}
                  onHide={() => setModalShow2(false)}
                />
              </span>
            </OverlayTrigger>
          </div>
        </div>
        <div className={style.body}>
          <div className={style.buscador}>
            <input
              type="text"
              className={`form-control ${style.inNombre}`}
              id="nombre"
            />
            <button className={style.button}>
              <FiSearch />
            </button>
          </div>

          <div className={style.filtro}>
            <button
              className={style.button}
              onClick={() => setModalShow3(true)}
            >
              Ver horario laboral
            </button>
            <ModalHorario
              show={modalShow3}
              onHide={() => setModalShow3(false)}
            />
            <button className={style.button} onClick={() => setModalShow4(true)}>
              Proximas vacaciones
            </button>
            <ModalVacaciones
              show={modalShow4}
              onHide={() => setModalShow4(false)}
            />
          </div>

          <div className={style.container}>
            <div className={style.tabla}>
              {/* <!-- Cabeceras --> */}
              <div
                className={style.celda}
                style={{
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                  fontWeight: "800",
                }}
              >
                DNI
              </div>
              <div
                className={style.celda}
                style={{
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                  fontWeight: "800",
                }}
              >
                Nombre
              </div>
              <div
                className={style.celda}
                style={{
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                  fontWeight: "800",
                }}
              >
                Apellido
              </div>
              <div
                className={style.celda}
                style={{
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                  fontWeight: "800",
                }}
              >
                Telefono
              </div>
              <div
                className={style.celda}
                style={{
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                  fontWeight: "800",
                }}
              >
                Correo
              </div>
              <div
                className={style.celda}
                style={{
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                  fontWeight: "800",
                }}
              >
                Direccion
              </div>
              <div
                className={style.celda}
                style={{ borderBottom: "1px solid black", fontWeight: "800" }}
              >
                Funciones
              </div>

              {/* <!-- Filas de informacion --> */}
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                Yhonny Aplicano
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                yhonny@gmail.com
              </div>

              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                yhonny@gmail.com
              </div>

              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                yhonny@gmail.com
              </div>

              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                yhonny@gmail.com
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                6
              </div>
              <div className={style.celda}>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Editar</Tooltip>}
                >
                  <button
                    className={style.delete}
                    onClick={() => setModalShow(true)}
                    style={{ marginRight: "5%" }}
                  >
                    <BiSolidPencil />
                  </button>
                </OverlayTrigger>

                <ModalEditar
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />

                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Eliminar</Tooltip>}
                >
                  <button
                    className={style.delete}
                    onClick={() => setModalShow1(true)}
                  >
                    <BsFillTrashFill />
                  </button>
                </OverlayTrigger>

                <ModalEliminar
                  show={modalShow1}
                  onHide={() => setModalShow1(false)}
                />
              </div>

              {/* <!-- Filas de informacion --> */}
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                Yhonny Aplicano
              </div>

              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                yhonny@gmail.com
              </div>

              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                yhonny@gmail.com
              </div>

              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                yhonny@gmail.com
              </div>

              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                yhonny@gmail.com
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                6
              </div>
              <div className={style.celda}>
                <button
                  className={style.delete}
                  onClick={() => setModalShow(true)}
                  style={{ marginRight: "5%" }}
                >
                  <BiSolidPencil />
                </button>
                <ModalEditar
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />

                <button
                  className={style.delete}
                  onClick={() => setModalShow(true)}
                >
                  <BsFillTrashFill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer className={style.footer} />
    </div>
  );
}