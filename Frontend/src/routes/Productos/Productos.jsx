/* eslint-disable react/prop-types */
/* import { Link } from "react-router-dom"; */
import React from "react";
import style from "./productosStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import producto from "../../assets/img/products.svg";
import { BiSolidPencil } from "react-icons/bi"; 
import { AiOutlinePlus } from "react-icons/ai"; 
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

function ModalEditar(props) {
  const { register, formState: { errors }, handleSubmit, } = useForm();
  function insertar() {
    // Aquí puedes manejar la lógica de inserción de datos
  }

  const { producto, onHide, onProductoAdded } = props;

  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio_compra, setPrecio_compra] = useState('');
  const [precio_venta, setPrecio_venta] = useState('');

  useEffect(() => {
    if (producto) {
      // Poblar los estados con la información del cliente que se va a editar
      setNombre(producto.nombre || '');
      setMarca(producto.marca || '');
      setDescripcion(producto.descripcion || '');
      setCantidad(producto.cantidad || '');
      setPrecio_compra(producto.precio_compra || '');
      setPrecio_venta(producto.precio_venta || '');
    }
  }, [producto]);

  const { id } = useParams();

  const handleEditProductos = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/productos/update/${producto.producto_id}`, {
        usuario_id: id,
        nombre,
        marca,
        descripcion,
        cantidad,
        precio_compra,
        precio_venta
        
      });
      
      console.log(response.data.message); // Manejar la respuesta del servidor

      onProductoAdded(); /* Recargamos tabla */
      onHide(); /* cerramos modal */
      
    } catch (error) {
      console.error('Error al agregar producto:', error);
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
          Informacion del producto
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
          type="text"
          className={`form-control ${style.inNombre}`}
          id="marca"
          {...register("marca", {
            required: "Por favor ingresa una marca",
            minLength: { value: 3, message:  "Por favor ingresa más de 2 caracteres"},
            maxLength: { value: 20, message: "No más de 20 caracteres"},
          })}
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
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
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
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
          {...register("cantidad", {
            required: "Por favor ingresa un número de teléfono",
            pattern: {
              value: /^[0-9]+(?:\.[0-9]+)?$/, 
              message: "Ingrese solo números",
            },
            minLength: { value: 0, message: "Por favor ingresa un número de teléfono"},
            maxLength: { value: 10000, message: "Por favor ingresa un número de teléfono"},
          })}
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Cantidad:</label>
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
          value={precio_compra}
          onChange={(e) => setPrecio_compra(e.target.value)}
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
          value={precio_venta}
          onChange={(e) => setPrecio_venta(e.target.value)}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Precio venta:</label>
          {errors.venta && (
            <span className={style.errorMessage}>{errors.venta.message}</span>
          )}
      </div>
      
     
      <Modal.Footer className={style.modalFooter}>
        <button className={style.sesion} type="button" onClick={handleEditProductos}>Actualizar informacion</button>
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
  const [marca, setMarca] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio_compra, setPrecio_compra] = useState('');
  const [precio_venta, setPrecio_venta] = useState('');

  const { id } = useParams();

  const handleProductos = async () => {
    try {
      const response = await axios.post('http://localhost:3000/productos/add', {
        usuario_id: id,
        nombre,
        marca,
        descripcion,
        cantidad,
        precio_compra,
        precio_venta
      });
      
      console.log(response.data.message); // Manejar la respuesta del servidor

      props.onProductoAdded(); /* Recargamos tabla */
      props.onHide(); /* cerramos modal */

      setNombre('');
      setMarca('');
      setDescripcion('');
      setCantidad('');
      setPrecio_compra('');
      setPrecio_venta('');
      
    } catch (error) {
      console.error('Error al agregar producto:', error);
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
          type="text"
          className={`form-control ${style.inNombre}`}
          id="marca"
          {...register("marca", {
            required: "Por favor ingresa una marca",
            minLength: { value: 3, message:  "Por favor ingresa más de 2 caracteres"},
            maxLength: { value: 20, message: "No más de 20 caracteres"},
          })}
          value={marca}
            onChange={(e) => setMarca(e.target.value)}
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
          value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
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
          {...register("cantidad", {
            required: "Por favor ingresa un número de teléfono",
            pattern: {
              value: /^[0-9]+(?:\.[0-9]+)?$/, 
              message: "Ingrese solo números",
            },
            minLength: { value: 0, message: "Por favor ingresa un número de teléfono"},
            maxLength: { value: 10000, message: "Por favor ingresa un número de teléfono"},
          })}
          value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
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
          value={precio_compra}
            onChange={(e) => setPrecio_compra(e.target.value)}
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
          value={precio_venta}
            onChange={(e) => setPrecio_venta(e.target.value)}
        />
        <label className={`form-label mb-0 ${style.userLabel}`}>
          Precio venta:</label>
          {errors.venta && (
            <span className={style.errorMessage}>{errors.venta.message}</span>
          )}
      </div>
      
      <Modal.Footer className={style.modalFooter}>
        <button className={style.sesion} type="button" onClick={handleProductos}>Agregar</button>
      </Modal.Footer>
      </form>
      </Modal.Body>
    </Modal>
  );
}

export default function Productos() {
  const [modalShow2, setModalShow2] = React.useState(false);

  /* Consumo backend */
  const { id } = useParams();

  const [productos, setProductos] = useState([]);

  const fetchProductos = () => {
    axios.get(`http://localhost:3000/productos/${id}`)
      .then(response => {
        // Actualizar el estado con los datos obtenidos
        setProductos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  };

  const handleEliminarProducto = async (producto_id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/productos/delete/${producto_id}`);
      console.log(response.data); // Manejar la respuesta del servidor, si es necesario
      setProductos(productos.filter(producto => producto.producto_id !== producto_id));
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const onProductoAdded = () => {
    fetchProductos(); // Recargar la lista de clientes
  };

  /* Para editar */
  const [modalShowList, setModalShowList] = useState(Array(productos.length).fill(false));
  const [productoEdit, setProductoEdit] = useState(null);

  const handleProductoClick = (index, producto) => {
    const newModalShowList = [...modalShowList];
    newModalShowList[index] = true;
    setModalShowList(newModalShowList);
    setProductoEdit(producto);
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
          <img src={producto} alt="" className={style.img} />
            <span style={{ fontWeight: "700" }}>Productos</span>
          </div>
          
          <div>
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Agregar producto</Tooltip>}
            >
              <span className="d-inline-block">
                <button type="button" className={`btn ${style.sesion}`} onClick={() => setModalShow2(true)}>
                  <AiOutlinePlus />
                </button>
                <ModalAgregar
                  show={modalShow2}
                  onHide={() => setModalShow2(false)}
                  onProductoAdded={onProductoAdded}
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
            >
              Ver productos en stock
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
                Marca
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
                Precio compra
              </div>
              <div
                className={style.celda}
                style={{
                  borderBottom: "1px solid black",
                  borderRight: "1px solid black",
                  fontWeight: "800",
                }}
              >
                Precio venta
              </div>
              <div
                className={style.celda}
                style={{ borderBottom: "1px solid black", fontWeight: "800" }}
              >
                Funciones
              </div>

              {/* <!-- Filas de informacion --> */}
              {productos.map((producto, index) => (
                <React.Fragment key={producto.producto_id}>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {producto.nombre}
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {producto.marca}
              </div>
              
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {producto.descripcion}
              </div>
              
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {producto.cantidad}
              </div>
              
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {producto.precio_compra} lps
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {producto.precio_venta} lps
              </div>
              <div className={style.celda}>
              <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Editar</Tooltip>}
            >
                <button
                  className={style.delete}
                  onClick={() => handleProductoClick(index, producto)}
                  style={{ marginRight: "5%" }}
                >
                  <BiSolidPencil />
                </button>
                </OverlayTrigger>

                <ModalEditar
                  show={modalShowList[index]}
                  onHide={() => handleCloseModal(index)}
                  producto={productoEdit}
                  onProductoAdded={onProductoAdded}
                />

<OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Eliminar</Tooltip>}
            >
                <button
                  className={style.delete}
                  onClick={() => handleEliminarProducto(producto.producto_id)}
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
