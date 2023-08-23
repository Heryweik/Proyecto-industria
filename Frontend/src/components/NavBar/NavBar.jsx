/* eslint-disable react/prop-types */
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import style from "./navbarStyle.module.css";
import logo from "../../assets/img/logoCode.jpeg";
import logo2 from "../../assets/img/logo.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaPowerOff } from "react-icons/fa";

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

/* Bootstrap */
import Modal from "react-bootstrap/Modal";

function ModalCerrar(props) {

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className={style.ModalHeader}>
        <h4>Deseas cerrar sesion?</h4>
      </Modal.Body>
      <Modal.Footer className={style.modalFooter}>
        <button onClick={props.onHide} className={style.boton1}>
          No
        </button>
        <Link to={"/"} style={{textDecoration: 'none'}}>
          <button className={style.sesion}>Si</button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default function NavBar() {
  
  const { id } = useParams();

  const [modalShow, setModalShow] = React.useState(false);
  const [abierto, setAbierto] = useState(false);

  const toggleAcordeon = () => {
    setAbierto(!abierto);
  };

  /* Consumo del backend */
  const [usuarios, setUsuarios] = useState([]);

  const fetchUsuario = () => {
    axios.get(`http://localhost:3000/usuarios/${id}`)
      .then(response => {
        // Actualizar el estado con los datos obtenidos
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los clientes:', error);
      });
  };

  useEffect(() => {
    fetchUsuario();
  }, []);

  return (
    <div className={style.Nav}>
      <div>
        <div className={style.info}>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link to={"/menu/" + id}>
              <img src={logo} alt="" className={style.logo} />
              <img src={logo2} alt="" className={style.logo2} />
            </Link>
            <Link to={"/clientes/" + id}>
              <button className={style.boton}>Clientes</button>
            </Link>
            <Link to={"/proveedores/" + id}>
              <button className={style.boton}>Proveedores</button>
            </Link>
            
            <Link to={"/empleados/" + id}>
              <button className={style.boton}>Empleados</button>
            </Link>
            <Link to={"/productos/" + id}>
              <button className={style.boton}>Productos</button>
            </Link>
            <Link to={"/servicios/" + id}>
              <button className={style.boton}>Mantenimientos</button>
            </Link>
            <Link to={"/ventas/" + id}>
              <button className={style.boton}>Ventas</button>
            </Link>
          </div>

          <div className={style.nombre}>
          {usuarios.map(usuario => (
            <span className={style.usuario} key={usuario.usuario_id}>{usuario.nombre} {usuario.apellido}</span>
          ))}
            <button
              className={`btn ${style.sesion}`}
              onClick={() => setModalShow(true)}
            >
              Cerrar Sesion
            </button>

            <ModalCerrar show={modalShow} onHide={() => setModalShow(false)} />

            <button
              className={`btn ${style.sesion2}`}
              onClick={() => setModalShow(true)}
            >
              <FaPowerOff />
            </button>

            <ModalCerrar show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
      </div>
      <div>
        <div className={style.acordeon}>
          <button className={style.titulo} onClick={toggleAcordeon}>
            Funciones
          </button>
          {abierto && (
            <div className={style.contenido}>
              <Link to={"/clientes/" + id}>
                <button className={style.boton2}>Clientes</button>
              </Link>
              <Link to={"/proveedores/" + id}>
                <button className={style.boton2}>Proveedores</button>
              </Link>
              
              <Link to={"/empleados/" + id}>
                <button className={style.boton2}>Empleados</button>
              </Link>
              <Link to={"/productos/" + id}>
                <button className={style.boton2}>Productos</button>
              </Link>
              <Link to={"/servicios/" + id}>
                <button className={style.boton2}>Mantenimientos</button>
              </Link>
              <Link to={"/ventas/" + id}>
                <button className={style.boton2}>Ventas</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
