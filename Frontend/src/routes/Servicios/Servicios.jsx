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

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ModalCitas(props) {
  /* Consumo backend */
  const [cliente, setCliente] = useState('');
  const [fecha_hora, setFecha_hora] = useState('');
  const [direccion, setDireccion] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [empleado, setEmpleado] = useState('');

  const { id } = useParams();

  const handleMantenimientos = async () => {
    try {
      const response = await axios.post('http://localhost:3000/servicios/add', {
        usuario_id: id,
        cliente,
        fecha_hora,
        descripcion,
        direccion,
        empleado
      });
      
      console.log(response.data.message); // Manejar la respuesta del servidor

      props.onMantenimientoAdded(); /* Recargamos tabla */
      props.onHide(); /* cerramos modal */

      setCliente('');
      setFecha_hora('');
      setDescripcion('');
      setDireccion('');
      setEmpleado('');
      
    } catch (error) {
      console.error('Error al agregar mantenimiento:', error);
    }
  };

  /* Cliente */
  const [clientes, setClientes] = useState([]);

  const fetchClientes = () => {
    axios.get(`http://localhost:3000/clientes/${id}`)
      .then(response => {
        // Actualizar el estado con los datos obtenidos
        setClientes(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los clientes:', error);
      });
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  /* Empleado */
  const [empleados, setEmpleados] = useState([]);

  const fetchEmpleados = () => {
    axios.get(`http://localhost:3000/empleados/${id}`)
      .then(response => {
        // Actualizar el estado con los datos obtenidos
        setEmpleados(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los empleados:', error);
      });
  };

  useEffect(() => {
    fetchEmpleados();
  }, []);

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
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
          >
          <option value=""></option>
          {clientes.map((cliente) => (
                <React.Fragment key={cliente.cliente_id}>
            <option value={cliente.nombre}>{cliente.nombre}</option>
            </React.Fragment>
          ))}
            </select>
          <label className={`form-label mb-0 ${style.userLabel}`}>
            Cliente:
          </label>
        </div>

        <Link to={"/Clientes/" + id} style={{textDecoration: 'none'}}>
        <button className={style.sesion}>
          Nuevo cliente
        </button>
        </Link>

        <div className={style.form}>
          <input
            type="datetime-local"
            className={`form-control ${style.inNombre}`}
            id="nombre"
            value={fecha_hora}
            onChange={(e) => setFecha_hora(e.target.value)}
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
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
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
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
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
            value={empleado}
            onChange={(e) => setEmpleado(e.target.value)}
          >
          <option value=""></option>
          {empleados.map((empleado) => (
                <React.Fragment key={empleado.empleado_id}>
            <option value={empleado.nombre}>{empleado.nombre}</option>
            </React.Fragment>
          ))}
            </select>
          <label className={`form-label mb-0 ${style.userLabel}`}>
            Empleado:
          </label>
        </div>
      </Modal.Body>
      <Modal.Footer className={style.modalFooter}>
        <button className={style.sesion} type="button" onClick={handleMantenimientos}>Crear cita</button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Servicios() {
  const [modalShow, setModalShow] = React.useState(false);

  

  const { id } = useParams();

  const [mantenimientos, setMantenimientos] = useState([]);
  const [hechos, setHechos] = useState([]);

  const fetchMantenimientos = () => {
    axios.get(`http://localhost:3000/servicios/${id}`)
      .then(response => {
        // Actualizar el estado con los datos obtenidos
        setMantenimientos(response.data);
        // Inicializar el array hechos con la misma longitud que mantenimientos y valores iniciales a false
        setHechos(new Array(response.data.length).fill(false));
      })
      .catch(error => {
        console.error('Error al obtener los mantenimientos:', error);
      });
  };

  useEffect(() => {
    fetchMantenimientos();
  }, []);

  const onMantenimientoAdded = () => {
    fetchMantenimientos(); // Recargar la lista de clientes
  };

  const handleMarcarHecho = (index) => {
    // Copiar el array de estados actuales
    const nuevosHechos = [...hechos];
    // Cambiar el estado del botón en la posición index
    nuevosHechos[index] = true;
    // Actualizar el estado
    setHechos(nuevosHechos);
  };

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
        <ModalCitas show={modalShow} onHide={() => setModalShow(false)}
        onMantenimientoAdded={onMantenimientoAdded} />

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
              {mantenimientos.map((mantenimiento, index) => (
                <React.Fragment key={mantenimiento.mantenimiento_id}>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {mantenimiento.cliente}
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {mantenimiento.fecha_hora}
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {mantenimiento.direccion}
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {mantenimiento.descripcion}
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {mantenimiento.empleado}
              </div>
              <div className={style.celda}>
              {hechos[index] ? (
                  <p>Mantenimiento hecho</p>
                ) : (
                  <OverlayTrigger
                    overlay={<Tooltip id={`tooltip-${index}`}>Marcar como hecho</Tooltip>}
                  >
                    <button className={style.delete} onClick={() => handleMarcarHecho(index)}>
                      <AiOutlineCheck />
                    </button>
                  </OverlayTrigger>
                )}
              </div>
              </React.Fragment>
              ))}

            </div>
          </div>
        </div>
      </main>
      <Footer className={style.footer} />
    </div>
  );
}
