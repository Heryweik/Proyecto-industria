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

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


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

  const { empleado, onHide, onEmpleadoAdded } = props;

  const [DNI, setDNI] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [horario, setHorario] = useState('');
  const [vacaciones, setVacaciones] = useState('');

  useEffect(() => {
    if (empleado) {
      // Poblar los estados con la información del cliente que se va a editar
      setDNI(empleado.DNI || '');
      setNombre(empleado.nombre || '');
      setApellido(empleado.apellido || '');
      setTelefono(empleado.telefono || '');
      setCorreo(empleado.correo || '');
      setDireccion(empleado.direccion || '');
      setHorario(empleado.horario || '');
      setVacaciones(empleado.vacaciones || '');
    }
  }, [empleado]);

  const { id } = useParams();

  const handleEditEmpleados = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/empleados/update/${empleado.empleado_id}`, {
        usuario_id: id,
        DNI,
        nombre,
        apellido,
        telefono,
        correo,
        direccion,
        horario,
        vacaciones
      });
      
      console.log(response.data.message); // Manejar la respuesta del servidor

      onEmpleadoAdded(); /* Recargamos tabla */
      onHide(); /* cerramos modal */
      
    } catch (error) {
      console.error('Error al agregar empleado:', error);
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
            value={DNI}
          onChange={(e) => setDNI(e.target.value)}
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
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
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
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
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
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
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
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
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
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Dirección:</label>
          {errors.direccion && (
            <span className={style.errorMessage}>{errors.direccion.message}</span>
          )}
        </div>

        <div className={style.form}>
        <input
          type="text"
          className={`form-control ${style.inNombre}`}
          id="horario"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Horario laboral:</label>
        </div>

        <div className={style.form}>
        <input
          type="datetime-local"
          className={`form-control ${style.inNombre}`}
          id="vacaciones"
          value={vacaciones}
          onChange={(e) => setVacaciones(e.target.value)}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Vacaciones:</label>
        </div>
     
      <Modal.Footer className={style.modalFooter}>
        <button className={style.sesion} type="button" onClick={handleEditEmpleados}>Actualizar informacion</button>
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

  /* Consumo backend */
  const [DNI, setDNI] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [horario, setHorario] = useState('');
  const [vacaciones, setVacaciones] = useState('');

  const { id } = useParams();

  const handleEmpleados = async () => {
    try {
      const response = await axios.post('http://localhost:3000/empleados/add', {
        usuario_id: id,
        DNI,
        nombre,
        apellido,
        telefono,
        correo,
        direccion,
        horario,
        vacaciones
      });
      
      console.log(response.data.message); // Manejar la respuesta del servidor

      props.onEmpleadoAdded(); /* Recargamos tabla */
      props.onHide(); /* cerramos modal */

      setDNI('');
      setNombre('');
      setApellido('');
      setTelefono('');
      setCorreo('');
      setDireccion('');
      setHorario('');
      setVacaciones('');
      
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
            value={DNI}
            onChange={(e) => setDNI(e.target.value)}
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
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
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
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
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
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
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
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
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
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Dirección:</label>
          {errors.direccion && (
            <span className={style.errorMessage}>{errors.direccion.message}</span>
          )}
        </div>

        <div className={style.form}>
        <input
          type="text"
          className={`form-control ${style.inNombre}`}
          id="horario"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Horario laboral:</label>
        </div>

        <div className={style.form}>
        <input
          type="datetime-local"
          className={`form-control ${style.inNombre}`}
          id="vacaciones"
          value={vacaciones}
          onChange={(e) => setVacaciones(e.target.value)}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Vacaciones:</label>
        </div>

      <Modal.Footer className={style.modalFooter}>
        <button className={style.sesion} type="button" onClick={handleEmpleados}>Agregar</button>
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

  /* Consumo backend */
  const { id } = useParams();

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

  const handleEliminarEmpleado = async (empleado_id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/empleados/delete/${empleado_id}`);
      console.log(response.data); // Manejar la respuesta del servidor, si es necesario
      setEmpleados(empleados.filter(empleado => empleado.empleado_id !== empleado_id));
    } catch (error) {
      console.error('Error al eliminar el empleado:', error);
    }
  };

  useEffect(() => {
    fetchEmpleados();
  }, []);

  const onEmpleadoAdded = () => {
    fetchEmpleados(); // Recargar la lista de clientes
  };

  /* Para editar */
  const [modalShowList, setModalShowList] = useState(Array(empleados.length).fill(false));
  const [empleadoEdit, setEmpleadoEdit] = useState(null);

  const handleEmpleadoClick = (index, empleado) => {
    const newModalShowList = [...modalShowList];
    newModalShowList[index] = true;
    setModalShowList(newModalShowList);
    setEmpleadoEdit(empleado);
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
                  onEmpleadoAdded={onEmpleadoAdded}
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
              {empleados.map((empleado, index) => (
                <React.Fragment key={empleado.empleado_id}>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {empleado.DNI}
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {empleado.nombre}
              </div>

              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {empleado.apellido}
              </div>

              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {empleado.telefono}
              </div>

              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {empleado.correo}
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {empleado.direccion}
              </div>
              <div className={style.celda}>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Editar</Tooltip>}
                >
                  <button
                    className={style.delete}
                    onClick={() => handleEmpleadoClick(index, empleado)}
                    style={{ marginRight: "5%" }}
                  >
                    <BiSolidPencil />
                  </button>
                </OverlayTrigger>

                <ModalEditar
                  show={modalShowList[index]}
                  onHide={() => handleCloseModal(index)}
                  empleado={empleadoEdit}
                  onEmpleadoAdded={onEmpleadoAdded}
                />

                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Eliminar</Tooltip>}
                >
                  <button
                    className={style.delete}
                    onClick={() => handleEliminarEmpleado(empleado.empleado_id)}
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
