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

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Modalventas(props) {
  /* Consumo backend */
  const [cliente, setCliente] = useState('');
  const [fecha_hora, setFecha_hora] = useState('');
  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [total, setTotal] = useState('');

  const { id } = useParams();

  const [precioProducto, setPrecioProducto] = useState(0);

  const handleVentas = async () => {
    try {
      const response = await axios.post('http://localhost:3000/ventas/add', {
        usuario_id: id,
        cliente,
        fecha_hora,
        producto,
        cantidad,
        total: Number(total).toFixed(2),
      });
      
      console.log(response.data.message); // Manejar la respuesta del servidor

      props.onVentaAdded(); /* Recargamos tabla */
      props.onHide(); /* cerramos modal */

      setCliente('');
      setFecha_hora('');
      setProducto('');
      setCantidad('');
      setTotal('');

      const totalVenta = cantidad * precioProducto;
    setTotal(totalVenta);
      
    } catch (error) {
      console.error('Error al agregar venta:', error);
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

  /* Producto */
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

  useEffect(() => {
    fetchProductos();
  }, []);

  useEffect(() => {
    const parsedCantidad = parseFloat(cantidad);
    const parsedPrecioProducto = parseFloat(precioProducto);
  
    if (!isNaN(parsedCantidad) && !isNaN(parsedPrecioProducto)) {
      const totalVenta = parsedCantidad * parsedPrecioProducto;
      setTotal(totalVenta);
    }
  }, [cantidad, precioProducto]);

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
          <select
            type="text"
            className={`form-control ${style.inNombre}`}
            id="producto"
            value={producto}
            onChange={(e) => {
              setProducto(e.target.value);
              const selectedProduct = productos.find(prod => prod.nombre === e.target.value);
              if (selectedProduct) {
                setPrecioProducto(selectedProduct.precio_venta);
              } else {
                setPrecioProducto(0);
              }
            }}
          >
          <option value=""></option>
          {productos.map((producto) => (
                <React.Fragment key={producto.producto_id}>
            <option value={producto.nombre}>{producto.nombre}</option>
            </React.Fragment>
          ))}
            </select>
          <label className={`form-label mb-0 ${style.userLabel}`}>
            Producto:
          </label>
        </div>
        <div className={style.form}>
          <input
            type="number"
            className={`form-control ${style.inNombre}`}
            id="cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
          <label className={`form-label mb-0 ${style.userLabel}`}>
            Cantidad:
          </label>
        </div>

        <div className={style.form} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <span style={{fontWeight: 'bold'}}>
            Total: {Number(total).toFixed(2)} lps
          </span>
        </div>
      </Modal.Body>
      <Modal.Footer className={style.modalFooter}>
        <button className={style.sesion} type="button" onClick={handleVentas}>Registrar venta</button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Ventas() {
  const [modalShow, setModalShow] = React.useState(false);

  const { id } = useParams();

  const [ventas, setVentas] = useState([]);

  const fetchVentas = () => {
    axios.get(`http://localhost:3000/ventas/${id}`)
      .then(response => {
        // Actualizar el estado con los datos obtenidos
        setVentas(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los ventas:', error);
      });
  };

  useEffect(() => {
    fetchVentas();
  }, []);

  const onVentaAdded = () => {
    fetchVentas(); // Recargar la lista de clientes
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
            <span style={{ fontWeight: "700" }}>Ventas</span>
          </div>
        </div>

        <button className={style.sesion} onClick={() => setModalShow(true)}>
          Nueva venta
        </button>
        <Modalventas show={modalShow} onHide={() => setModalShow(false)}
        onVentaAdded={onVentaAdded} />

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
              {ventas.map((venta) => (
                <React.Fragment key={venta.venta_id}>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {venta.cliente}
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {venta.fecha_hora}
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {venta.producto}
              </div>
              <div
                className={style.celda}
                style={{ borderRight: "1px solid black" }}
              >
                {venta.cantidad}
              </div>
              <div className={style.celda}>
                <span style={{fontWeight: 'bold'}}>{venta.total} lps</span>
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
