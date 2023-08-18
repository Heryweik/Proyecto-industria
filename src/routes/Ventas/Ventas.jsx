/* eslint-disable react/prop-types */
import React from "react";
import style from "./ventasStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import servicios from "../../assets/img/services.svg";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

/* Bootstrap */
import Modal from "react-bootstrap/Modal";

function Modalventas(props) {

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={style.ModalHeader}>
        <Modal.Title id="example-custom-modal-styling-title">
          Detalles de la venta
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
            Producto:
          </label>
        </div>
        <div className={style.form}>
          <input
            type="number"
            className={`form-control ${style.inNombre}`}
            id="empleado"
          />
          <label className={`form-label mb-0 ${style.userLabel}`}>
            Cantidad:
          </label>
        </div>

        <div className={style.form} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <span>
            Subtotal: 
          </span>
          <span style={{fontWeight: 'bold'}}>
            Total:
          </span>
        </div>
      </Modal.Body>
      <Modal.Footer className={style.modalFooter}>
        <button className={style.sesion}>Registrar venta</button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Ventas() {
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
            <span style={{ fontWeight: "700" }}>Ventas</span>
          </div>
        </div>

        <button className={style.sesion} onClick={() => setModalShow(true)}>
          Nueva venta
        </button>
        <Modalventas show={modalShow} onHide={() => setModalShow(false)} />

        <div className={style.body}>
          <div className={style.container}>
            <span style={{fontSize: 'medium', fontWeight: '700'}}>Historial de ventas</span>
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
                Producto
              </div>
              <div
                className={style.celda}
                style={{
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                  fontWeight: "800",
                }}
              >
                Cantidad
              </div>
              <div
                className={style.celda}
                style={{ borderBottom: "1px solid black", fontWeight: "800" }}
              >
                Total
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
                Silla
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                3
              </div>
              <div className={style.celda}>
                <span style={{fontWeight: 'bold'}}>500$</span>
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
                Silla
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                3
              </div>
              <div className={style.celda}>
                <span style={{fontWeight: 'bold'}}>500$</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer className={style.footer} />
    </div>
  );
}
