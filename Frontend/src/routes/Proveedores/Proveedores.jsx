/* eslint-disable react/prop-types */
/* import { Link } from "react-router-dom"; */
import React from "react";
import style from "./proveedoresStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import proveedor from "../../assets/img/proveedor.svg";
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


function ModalPedido(props) {

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={style.ModalHeader}>
        <Modal.Title id="example-custom-modal-styling-title">
          Detalles del pedido
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
            Proveedor:
          </label>
        </div>

        <div className={style.form}>
        <select
            type="text"
            className={`form-control ${style.inNombre}`}
            id="producto"
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
            type="text"
            className={`form-control ${style.inNombre}`}
            id="direccion"
          />
          <label className={`form-label mb-0 ${style.userLabel}`} style={{top: '40px'}}>
            Cantidad:
          </label>
        </div>
        <div className={style.form} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <span style={{fontWeight: 'bold'}}>
            Total:
          </span>
        </div>
        
      </Modal.Body>
      <Modal.Footer className={style.modalFooter}>
        <button className={style.sesion}>Realizar pedido</button>
      </Modal.Footer>
    </Modal>
  );
}


function ModalHistorial(props) {
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
              Proveedor
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
              style={{
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                fontWeight: "800",
              }}
            >
              Fecha
            </div>
            <div
              className={style.celda}
              style={{
                borderBottom: "1px solid black",
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
              Yhonny APlixcano
            </div>
            <div
              className={style.celda}
              style={{ borderRight: "1px solid black" }}
            >
              Mesa
            </div>
            <div
              className={style.celda}
              style={{ borderRight: "1px solid black" }}
            >
              10
            </div>
            <div
              className={style.celda}
              style={{ borderRight: "1px solid black" }}
            >
              20/08/2023
            </div>
            <div
              className={style.celda}
            >
              700$
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

  const { proveedor, onHide, onProveedorAdded } = props;

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');

  useEffect(() => {
    if (proveedor) {
      // Poblar los estados con la información del cliente que se va a editar
      setNombre(proveedor.nombre || '');
      setTelefono(proveedor.telefono || '');
      setCorreo(proveedor.correo || '');
      setDireccion(proveedor.direccion || '');
    }
  }, [proveedor]);

  const { id } = useParams();

  const handleEditProveedor = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/proveedores/update/${proveedor.proveedor_id}`, {
        usuario_id: id,
        nombre,
        telefono,
        correo,
        direccion
      });
      
      console.log(response.data.message); // Manejar la respuesta del servidor

      onProveedorAdded(); /* Recargamos tabla */
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
          Informacion del proveedor
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
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>Nombre:</label>
        {errors.nombre && (
            <span className={style.errorMessage}>{errors.nombre.message}</span>
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
          type="text"
          className={`form-control ${style.inNombre}`}
          id="correo"
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
        <label className={`form-label mb-0 ${style.userLabel}`}>Dirección:</label>
        {errors.direccion && (
            <span className={style.errorMessage}>{errors.direccion.message}</span>
          )}
        </div>
      
     
      <Modal.Footer className={style.modalFooter}>
        <button className={style.sesion} type="button" onClick={handleEditProveedor}>
          Actualizar informacion</button>
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
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');

  const { id } = useParams();

  const handleProveedores = async () => {
    try {
      const response = await axios.post('http://localhost:3000/proveedores/add', {
        usuario_id: id,
        nombre,
        telefono,
        correo,
        direccion
      });
      
      console.log(response.data.message); // Manejar la respuesta del servidor

      props.onProveedorAdded(); /* Recargamos tabla */
      props.onHide(); /* cerramos modal */

      setNombre('');
      setTelefono('');
      setCorreo('');
      setDireccion('');
      
    } catch (error) {
      console.error('Error al agregar proveedor:', error);
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
          Nuevo proveedor
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
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>Nombre:</label>
        {errors.nombre && (
            <span className={style.errorMessage}>{errors.nombre.message}</span>
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
          type="text"
          className={`form-control ${style.inNombre}`}
          id="correo"
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
        <label className={`form-label mb-0 ${style.userLabel}`}>Dirección:</label>
        {errors.direccion && (
            <span className={style.errorMessage}>{errors.direccion.message}</span>
          )}
        </div>
      
      <Modal.Footer className={style.modalFooter}>
        <button className={style.sesion} type="button" onClick={handleProveedores} >Agregar</button>
    </Modal.Footer>
    </form>
    </Modal.Body>
    </Modal>
  );
}

export default function Proveedores() {
  const [modalShow4, setModalShow4] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  /* Consumo backend */
  const { id } = useParams();

  const [proveedores, setProveedores] = useState([]);

  const fetchProveedores = () => {
    axios.get(`http://localhost:3000/proveedores/${id}`)
      .then(response => {
        // Actualizar el estado con los datos obtenidos
        setProveedores(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los Proveedores:', error);
      });
  };

  const handleEliminarProveedor = async (proveedor_id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/proveedores/delete/${proveedor_id}`);
      console.log(response.data); // Manejar la respuesta del servidor, si es necesario
      setProveedores(proveedores.filter(proveedor => proveedor.proveedor_id !== proveedor_id));
    } catch (error) {
      console.error('Error al eliminar el Proveedor:', error);
    }
  };

  useEffect(() => {
    fetchProveedores();
  }, []);

  const onProveedorAdded = () => {
    fetchProveedores(); // Recargar la lista de clientes
  };

  /* Para editar */
  const [modalShowList, setModalShowList] = useState(Array(proveedores.length).fill(false));
  const [proveedorEdit, setProveedorEdit] = useState(null);

  const handleProveedorClick = (index, cliente) => {
    const newModalShowList = [...modalShowList];
    newModalShowList[index] = true;
    setModalShowList(newModalShowList);
    setProveedorEdit(cliente);
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
          <img src={proveedor} alt="" className={style.img} />
            <span style={{ fontWeight: "700" }}>Proveedores</span>
          </div>
          
          <div>
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Agregar proveedor</Tooltip>}
            >
              <span className="d-inline-block">
                <button type="button" className={`btn ${style.sesion}`} onClick={() => setModalShow2(true)}>
                  <BiUserPlus />
                </button>
                <ModalAgregar
                  show={modalShow2}
                  onHide={() => setModalShow2(false)}
                  onProveedorAdded={onProveedorAdded}
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
              Realizar pedido
            </button>
            <ModalPedido
              show={modalShow3}
              onHide={() => setModalShow3(false)}
            />
            <button className={style.button} onClick={() => setModalShow4(true)}>
              Historial de pedidos
            </button>
            <ModalHistorial
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
              {proveedores.map((proveedor, index) => (
                <React.Fragment key={proveedor.proveedor_id}>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {proveedor.nombre}
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {proveedor.telefono}
              </div>
              
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {proveedor.correo}
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {proveedor.direccion}
              </div>
              <div className={style.celda}>
              <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Editar</Tooltip>}
            >
                <button
                  className={style.delete}
                  onClick={() => handleProveedorClick(index, proveedor)}
                  style={{ marginRight: "5%" }}
                >
                  <BiSolidPencil />
                </button>
                </OverlayTrigger>

                <ModalEditar
                  show={modalShowList[index]}
                  onHide={() => handleCloseModal(index)}
                  proveedor={proveedorEdit}
                  onProveedorAdded={onProveedorAdded}
                />

              <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Eliminar</Tooltip>}
            >
                <button
                  className={style.delete}
                  onClick={() => handleEliminarProveedor(proveedor.proveedor_id)}
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
