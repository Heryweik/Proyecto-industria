/* eslint-disable react/prop-types */
/* import { Link } from "react-router-dom"; */
import React from "react";
import style from "./productosStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import producto from "../../assets/img/products.svg";
import { BiUserPlus, BiSolidPencil } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { BsFillTrashFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
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
        <h4>Deseas eliminar este producto?</h4>
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

function ModalEditar(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={style.ModalHeader}>
        <Modal.Title id="example-custom-modal-styling-title">
          Informacion del producto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={style.Modal}>
        <div className={style.form}>
      <input
          type="text"
          className={`form-control ${style.inNombre}`}
          id="nombre"
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>Nombre:</label>
        </div>

        <div className={style.form}>
        <input
          type="text"
          className={`form-control ${style.inNombre}`}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>Correo:</label>
        </div>
      </Modal.Body>
      <Modal.Footer className={style.modalFooter}>
        <button className={style.sesion}>Actualizar informacion</button>
      </Modal.Footer>
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
          Nuevo producto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={style.Modal}>
      <form className={style.Modal} onSubmit={handleSubmit(insertar)}>
        <div className={style.form}>
      <input
          type="text"
          className={`form-control ${style.inNombre}`}
          id="nombre"
          {...register("nombre", {
            required: "Por favor ingresa un nombre",
            pattern: {
              value: /^(?!.*(.).*\1)[A-Za-z]+$/,
                 message: "Ingreso numeros o un nombre no valido",
            },
            minLength: { value: 3, message:  "Por favor ingresa más de 2 caracteres"},
            maxLength: { value: 20, message: "No más de 20 caracteres"},
          })}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>Nombre:</label>
        {errors.nombre && (
            <span className={style.errorMessage}>{errors.nombre.message}</span>
          )}
        </div>
        <div className={style.form}>
      <input
          type="text"
          className={`form-control ${style.inNombre}`}
          id="marca"
          {...register("marca", {
            required: "Por favor ingresa una marca",
            minLength: { value: 3, message:  "Por favor ingresa más de 2 caracteres"},
            maxLength: { value: 20, message: "No más de 20 caracteres"},
          })}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>Marca:</label>
        {errors.marca && (
            <span className={style.errorMessage}>{errors.marca.message}</span>
          )}
        </div>
        <div className={style.form}>
        <input
          type="text"
          className={`form-control ${style.inNombre}`}
          id="descripcion"
          {...register("descripcion", {
            required: "Por favor ingresa un descripción",
            minLength: { value: 5, message: "Por favor ingresa de 5 caracteres" },
            maxLength: { value: 50, message:"Ingrese menos de 50 caracteres" },
          })}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Descripción:</label>
          {errors.descripcion && (
            <span className={style.errorMessage}>{errors.descripcion.message}</span>
          )}
        </div>
        <div className={style.form}>
       <input
          type="number"
          className={`form-control ${style.inNombre}`}
          id="cantidad"
          {...register("telefono", {
            required: "Por favor ingresa un número de teléfono",
            pattern: {
              value: /^[0-9]+(?:\.[0-9]+)?$/, 
              message: "Ingrese solo números",
            },
            minLength: { value: 0, message: "Por favor ingresa un número de teléfono"},
            maxLength: { value: 10000, message: "Por favor ingresa un número de teléfono"},
          })}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Cantidad Disponible:</label>
          {errors.cantidad && (
            <span className={style.errorMessage}>{errors.cantidad.message}</span>
          )}
      </div>
      <div className={style.form}>
       <input
          type="number"
          className={`form-control ${style.inNombre}`}
          id="compra"
          {...register("compra", {
            required: "Por favor ingresa un precio",
            pattern: {
              value: /^[0-9]+(?:\.[0-9]+)?$/, 
              message: "Ingrese solo números",
            },
            minLength: { value: 0, message: "Por favor ingresa un precio"},
            maxLength: { value: 10000, message: "Por favor ingresa un precio"},
          })}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Precio Compra:</label>
          {errors.compra && (
            <span className={style.errorMessage}>{errors.compra.message}</span>
          )}
      </div>
      <div className={style.form}>
       <input
          type="number"
          className={`form-control ${style.inNombre}`}
          id="venta"
          {...register("venta", {
            required: "Por favor ingresa un precio",
            pattern: {
              value: /^[0-9]+(?:\.[0-9]+)?$/, 
              message: "Ingrese solo números",
            },
            minLength: { value: 0, message: "Por favor ingresa un precio"},
            maxLength: { value: 10000, message: "Por favor ingresa un precio"},
          })}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Precio venta:</label>
          {errors.venta && (
            <span className={style.errorMessage}>{errors.venta.message}</span>
          )}
      </div>
      
      <Modal.Footer className={style.modalFooter}>
        <button className={style.sesion} type="submit">Agregar</button>
      </Modal.Footer>
      </form>
      </Modal.Body>
    </Modal>
  );
}

export default function Productos() {
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className={style.containerFluid}>
      <NavBar />
      <main className={style.main}>
        
        <div className={style.head}>
          <div className={style.junt}>
          <img src={producto} alt="" className={style.img} />
            <span style={{ fontWeight: "700" }}>Productos</span>
          </div>
          
          <div>
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Agregar producto</Tooltip>}
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
                #Compras
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
