/* eslint-disable react/prop-types */
import React from "react";
import style from "./serviciosStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import servicios from "../../assets/img/services.svg";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

/* Bootstrap */
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Modal from "react-bootstrap/Modal";

function ModalCitas(props) {

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={style.ModalHeader}>
        <Modal.Title id="example-custom-modal-styling-title">
          Detalles de la cita
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={style.Modal}>
      <div className={style.form}>
          <select
            type="text"
            className={`form-control ${style.inNombre}`}
            id="nombre"
          >
          <option value=""></option>
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            </select>
          <label className={`form-label mb-0 ${style.userLabel}`}>
            Cliente:
          </label>
        </div>

        <Link to={"/Clientes"} style={{textDecoration: 'none'}}>
        <button className={style.sesion}>
          Nuevo cliente
        </button>
        </Link>

        <div className={style.form}>
          <input
            type="datetime-local"
            className={`form-control ${style.inNombre}`}
            id="nombre"
          />
          <label className={`form-label mb-0 ${style.userLabel}`}>
            Fecha y hora:
          </label>
        </div>

        <div className={style.form}>
          <input
            type="text"
            className={`form-control ${style.inNombre}`}
            id="direccion"
          />
          <label className={`form-label mb-0 ${style.userLabel}`} style={{top: '40px'}}>
            Direccion:
          </label>
        </div>

        <div className={style.form}>
          <textarea
            type="text"
            className={`form-control ${style.inNombre}`}
            id="exampleInputEmail1"
            style={{height: 'auto'}}
            rows="4" cols="20"
          />
          <label className={`form-label mb-0 ${style.userLabel}`} style={{top: '40px'}}>
            Descripcion:
          </label>
        </div>

        <div className={style.form}>
          <select
            type="text"
            className={`form-control ${style.inNombre}`}
            id="empleado"
          >
          <option value=""></option>
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            </select>
          <label className={`form-label mb-0 ${style.userLabel}`}>
            Empleado:
          </label>
        </div>
      </Modal.Body>
      <Modal.Footer className={style.modalFooter}>
        <button className={style.sesion}>Crear cita</button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Servicios() {
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
            <img src={servicios} alt="" className={style.img} />
            <span style={{ fontWeight: "700" }}>Mantenimientos</span>
          </div>
        </div>

        <button className={style.sesion} onClick={() => setModalShow(true)}>
          Nueva cita
        </button>
        <ModalCitas show={modalShow} onHide={() => setModalShow(false)} />

        <div className={style.body}>
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
                Cliente
              </div>
              <div
                className={style.celda}
                style={{
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                  fontWeight: "800",
                }}
              >
                fecha y hora
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
                style={{
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                  fontWeight: "800",
                }}
              >
                Descripcion
              </div>
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
                style={{ borderBottom: "1px solid black", fontWeight: "800" }}
              >
                Estado
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
                23/04/2023 10:30 Am
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                UNAH
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                Mantenimiento de una silla
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                Carlos Alberto
              </div>
              <div className={style.celda}>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-disabled">Marcar como hecho</Tooltip>
                  }
                >
                  <button className={style.delete}>
                    <AiOutlineCheck />
                  </button>
                </OverlayTrigger>
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
                23/04/2023 10:45 Pm
              </div>
              
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                UNAH
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                dsahkjdsha kjdhaksjdh kajshd kjash
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                asdkajhsd akjsh 
              </div>
              <div className={style.celda}>
                <span>Mantenimiento hecho!</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer className={style.footer} />
    </div>
  );
}
