/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import React from "react";
import style from "./clientesStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import cliente from "../../assets/img/user.svg";
import { BiUserPlus, BiSolidPencil } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { BsFillTrashFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { FaChevronLeft } from "react-icons/fa";
import { useState } from "react";

/* Bootstrap */
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Modal from "react-bootstrap/Modal";
import { useParams } from 'react-router-dom';

import { useEffect } from 'react';
import axios from 'axios';

function ModalSuscripciones(props) {
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
              Total
            </div>

            {/* <!-- Filas de informacion --> */}
            <div
              className={style.celda}
              style={{ borderRight: "1px solid black" }}
            >
              Yhonny Yupanky
            </div>
            <div
              className={style.celda}
              style={{ borderRight: "1px solid black" }}
            >
              10
            </div>

            {/* <!-- Filas de informacion --> */}
            <div
              className={style.celda}
              style={{ borderRight: "1px solid black" }}
            >
              Aplicano
            </div>
            <div
              className={style.celda}
              style={{ borderRight: "1px solid black" }}
            >
              23423
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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  function insertar() {
    // Aquí puedes manejar la lógica de inserción de datos
  }

  const { cliente, onHide, onClienteAdded } = props;

  const [DNI, setDNI] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [edad, setEdad] = useState('');

  useEffect(() => {
    if (cliente) {
      // Poblar los estados con la información del cliente que se va a editar
      setDNI(cliente.DNI || '');
      setNombre(cliente.nombre || '');
      setApellido(cliente.apellido || '');
      setTelefono(cliente.telefono || '');
      setCorreo(cliente.correo || '');
      setDireccion(cliente.direccion || '');
      setEdad(cliente.edad || '');
    }
  }, [cliente]);

  const { id } = useParams();

  const handleEditClientes = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/clientes/update/${cliente.cliente_id}`, {
        usuario_id: id,
        DNI,
        nombre,
        apellido,
        telefono,
        correo,
        direccion,
        edad
      });
      
      console.log(response.data.message); // Manejar la respuesta del servidor

      onClienteAdded(); /* Recargamos tabla */
      onHide(); /* cerramos modal */
      
    } catch (error) {
      console.error('Error al agregar cliente:', error);
    }
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={style.ModalHeader}>
        <Modal.Title id="example-custom-modal-styling-title">
          Informacion del usuario
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
                  value: /^\d{13}$/,
                  message: "Por favor ingresa una DNI válida",
                },
                minLength: {
                  value: 13,
                  message: "Por favor ingresa una DNI válida",
                },
                maxLength: {
                  value: 13,
                  message: "Por favor ingresa una DNI válida",
                },
              })}
              value={DNI}
              onChange={(e) => setDNI(e.target.value)}
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>DNI:</label>
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
                minLength: {
                  value: 3,
                  message: "Por favor ingresa más de 2 caracteres",
                },
                maxLength: { value: 20, message: "No más de 20 caracteres" },
              })}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Nombre:
            </label>
            {errors.nombre && (
              <span className={style.errorMessage}>
                {errors.nombre.message}
              </span>
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
                minLength: {
                  value: 3,
                  message: "Por favor ingresamás de 2 caracteres",
                },
                maxLength: { value: 20, message: "No más de 20 caracteres" },
              })}
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Apellido:
            </label>
            {errors.apellido && (
              <span className={style.errorMessage}>
                {errors.apellido.message}
              </span>
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
                minLength: {
                  value: 8,
                  message: "Por favor ingresa un número de teléfono",
                },
                maxLength: {
                  value: 11,
                  message: "Por favor ingresa un número de teléfono",
                },
              })}
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Teléfono:
            </label>
            {errors.telefono && (
              <span className={style.errorMessage}>
                {errors.telefono.message}
              </span>
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
                  message: "Ingrese un correo válido",
                },
                minLength: { value: 2, message: "Por favor ingresa un correo" },
                maxLength: {
                  value: 50,
                  message: "Por favor ingresa un correo",
                },
              })}
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Correo:
            </label>
            {errors.correo && (
              <span className={style.errorMessage}>
                {errors.correo.message}
              </span>
            )}
          </div>
          <div className={style.form}>
            <input
              type="text"
              className={`form-control ${style.inNombre}`}
              id="direccion"
              {...register("direccion", {
                required: "Por favor ingresa un dirección",
                minLength: {
                  value: 5,
                  message: "Por favor ingresa de 5 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "Ingrese menos de 50 caracteres",
                },
              })}
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Dirección:
            </label>
            {errors.direccion && (
              <span className={style.errorMessage}>
                {errors.direccion.message}
              </span>
            )}
          </div>
          <div className={style.form}>
            <input
              type="number"
              className={`form-control ${style.inNombre}`}
              id="edad"
              {...register("edad", {
                required: "Por favor ingresa una edad",
                pattern: {
                  value: /^\d{8}$/,
                  message: "Ingrese solo números",
                },
                minLength: {
                  value: 1,
                  message: "Por favor ingresa una edad",
                },
                maxLength: {
                  value: 3,
                  message: "Por favor ingresa una edad",
                },
              })}
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Edad:
            </label>
            {errors.edad && (
              <span className={style.errorMessage}>
                {errors.edad.message}
              </span>
            )}
          </div>

          <Modal.Footer className={style.modalFooter}>
            <button className={style.sesion} type="button" onClick={handleEditClientes}>
              Actualizar informacion
            </button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
}

function ModalAgregar(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  function insertar() {
    // Aquí puedes manejar la lógica de inserción de datos
  }

  /* Consumo backend */
  const [DNI, setDNI] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [edad, setEdad] = useState('');

  const { id } = useParams();

  const handleClientes = async () => {
    try {
      const response = await axios.post('http://localhost:3000/Clientes/add', {
        usuario_id: id,
        DNI,
        nombre,
        apellido,
        telefono,
        correo,
        direccion,
        edad
      });
      
      console.log(response.data.message); // Manejar la respuesta del servidor

      props.onClienteAdded(); /* Recargamos tabla */
      props.onHide(); /* cerramos modal */

      setDNI('');
      setNombre('');
      setApellido('');
      setTelefono('');
      setCorreo('');
      setDireccion('');
      setEdad('');
      
    } catch (error) {
      console.error('Error al agregar cliente:', error);
    }
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={style.ModalHeader}>
        <Modal.Title id="example-custom-modal-styling-title">
          Nuevo usuario
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
                  value: /^\d{13}$/,
                  message: "Por favor ingresa una DNI válida",
                },
                minLength: {
                  value: 13,
                  message: "Por favor ingresa una DNI válida",
                },
                maxLength: {
                  value: 13,
                  message: "Por favor ingresa una DNI válida",
                },
              })}
              value={DNI}
              onChange={(e) => setDNI(e.target.value)}
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>DNI:</label>
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
                minLength: {
                  value: 3,
                  message: "Por favor ingresa más de 2 caracteres",
                },
                maxLength: { value: 20, message: "No más de 20 caracteres" },
              })}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Nombre:
            </label>
            {errors.nombre && (
              <span className={style.errorMessage}>
                {errors.nombre.message}
              </span>
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
                minLength: {
                  value: 3,
                  message: "Por favor ingresamás de 2 caracteres",
                },
                maxLength: { value: 20, message: "No más de 20 caracteres" },
              })}
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Apellido:
            </label>
            {errors.apellido && (
              <span className={style.errorMessage}>
                {errors.apellido.message}
              </span>
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
                minLength: {
                  value: 8,
                  message: "Por favor ingresa un número de teléfono",
                },
                maxLength: {
                  value: 11,
                  message: "Por favor ingresa un número de teléfono",
                },
              })}
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Teléfono:
            </label>
            {errors.telefono && (
              <span className={style.errorMessage}>
                {errors.telefono.message}
              </span>
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
                  message: "Ingrese un correo válido",
                },
                minLength: { value: 2, message: "Por favor ingresa un correo" },
                maxLength: {
                  value: 50,
                  message: "Por favor ingresa un correo",
                },
              })}
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Correo:
            </label>
            {errors.correo && (
              <span className={style.errorMessage}>
                {errors.correo.message}
              </span>
            )}
          </div>
          <div className={style.form}>
            <input
              type="text"
              className={`form-control ${style.inNombre}`}
              id="direccion"
              {...register("direccion", {
                required: "Por favor ingresa un dirección",
                minLength: {
                  value: 5,
                  message: "Por favor ingresa de 5 caracteres",
                },
                maxLength: {
                  value: 50,
                  message: "Ingrese menos de 50 caracteres",
                },
              })}
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Dirección:
            </label>
            {errors.direccion && (
              <span className={style.errorMessage}>
                {errors.direccion.message}
              </span>
            )}
          </div>

          <div className={style.form}>
            <input
              type="number"
              className={`form-control ${style.inNombre}`}
              id="edad"
              {...register("edad", {
                required: "Por favor ingresa una edad",
                pattern: {
                  value: /^\d{8}$/,
                  message: "Ingrese solo números",
                },
                minLength: {
                  value: 1,
                  message: "Por favor ingresa una edad",
                },
                maxLength: {
                  value: 3,
                  message: "Por favor ingresa una edad",
                },
              })}
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            />
            <label className={`form-label mb-0 ${style.userLabel}`}>
              Edad:
            </label>
            {errors.edad && (
              <span className={style.errorMessage}>
                {errors.edad.message}
              </span>
            )}
          </div>

          <Modal.Footer className={style.modalFooter}>
            <button className={style.sesion} type="button" onClick={handleClientes}>
              Agregar
            </button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default function Clientes() {
  const [modalShow3, setModalShow3] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);/* 
  const [modalShow, setModalShow] = React.useState(false); */

  const [abierto, setAbierto] = useState(false);

  const toggleAcordeon = () => {
    setAbierto(!abierto);
  };

  /* Consumo backend */
  const { id } = useParams();
  console.log('ID del usuario:', id);

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


  const handleEliminarCliente = async (cliente_id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/clientes/delete/${cliente_id}`);
      console.log(response.data); // Manejar la respuesta del servidor, si es necesario
      setClientes(clientes.filter(cliente => cliente.cliente_id !== cliente_id));
    } catch (error) {
      console.error('Error al eliminar el cliente:', error);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  const onClienteAdded = () => {
    fetchClientes(); // Recargar la lista de clientes
  };

  const [modalShowList, setModalShowList] = useState(Array(clientes.length).fill(false));
  const [clienteEdit, setClienteEdit] = useState(null);

  const handleEditClick = (index, cliente) => {
    const newModalShowList = [...modalShowList];
    newModalShowList[index] = true;
    setModalShowList(newModalShowList);
    setClienteEdit(cliente);
  };

  const handleCloseModal = (index) => {
    const newModalShowList = [...modalShowList];
    newModalShowList[index] = false;
    setModalShowList(newModalShowList);
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
            <img src={cliente} alt="" className={style.img} />
            <span style={{ fontWeight: "700" }}>Clientes</span>
          </div>

          <div>
            <OverlayTrigger
              overlay={
                <Tooltip id="tooltip-disabled">Agregar Clientes</Tooltip>
              }
            >
              <span className="d-inline-block">
                <button
                  type="button"
                  className={`btn ${style.sesion}`}
                  onClick={() => setModalShow2(true)}
                >
                  <BiUserPlus />
                </button>
                <ModalAgregar
                  show={modalShow2}
                  onHide={() => setModalShow2(false)}
                  onClienteAdded={onClienteAdded}
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
              Total de compras
            </button>
            <ModalSuscripciones
              show={modalShow3}
              onHide={() => setModalShow3(false)}
            />
            <button className={style.button} onClick={toggleAcordeon}>
              Filtrar por edad
            </button>
          </div>

          <div className={style.acordeon}>
            {abierto && (
              <div className={style.contenido}>
                <button className={style.boton2}>0 - 18 años</button>
                <button className={style.boton2}>19 - 59 años</button>
                <button className={style.boton2}>60 - 60+ años </button>
              </div>
            )}
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
                style={{
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                  fontWeight: "800",
                }}
              >
                Edad
              </div>
              <div
                className={style.celda}
                style={{ borderBottom: "1px solid black", fontWeight: "800" }}
              >
                Funciones
              </div>

              {/* <!-- Filas de informacion --> */}
              {clientes.map((cliente, index) => (
                <React.Fragment key={cliente.cliente_id}>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {cliente.DNI}
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {cliente.nombre}
              </div>

              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {cliente.apellido} 
              </div>

              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {cliente.telefono}
              </div>

              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {cliente.correo}
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {cliente.direccion}
              </div>
              
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {cliente.edad}
              </div>
              <div className={style.celda}>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Editar</Tooltip>}
                >
                  <button
                    className={style.delete}
                    onClick={() => handleEditClick(index, cliente)}
                    style={{ marginRight: "5%" }}
                  >
                    <BiSolidPencil />
                  </button>
                </OverlayTrigger>

                <ModalEditar
                  /* show={modalShow} */
                  show={modalShowList[index]}
                  onHide={() => handleCloseModal(index)}
                  cliente={clienteEdit}
                  onClienteAdded={onClienteAdded}
                />

                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Eliminar</Tooltip>}
                >
                  <button
                    className={style.delete}
                    onClick={() => handleEliminarCliente(cliente.cliente_id)}
                  >
                    <BsFillTrashFill />
                  </button>
                </OverlayTrigger>

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