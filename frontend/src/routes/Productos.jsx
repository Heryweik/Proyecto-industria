/* import { Link } from "react-router-dom"; */
import style from "./productosStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import product from "../assets/img/products.svg";
import { BiUserPlus } from "react-icons/bi";

/* Bootstrap */
//import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


export default function Productos() {
  return (
    <div className={style.containerFluid}>
      <NavBar />
      <main className={style.main}>
        <div className={style.head}>
          <div>
            <img src={product} alt="" className={style.img} />
          </div>
          <div>
            <h1 style={{ fontWeight: "700" }}>Productos</h1>
          </div>
          <div>
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Agregar Productos</Tooltip>}
            >
              <span className="d-inline-block">
                <button type="button" className={`btn ${style.sesion}`}>
                  <BiUserPlus />
                </button>
              </span>
            </OverlayTrigger>
          </div>
        </div>
        {/*<div className={style.body}>
          <div className={style.buscador}>
            <input type="text" />
            <button>Buscar</button>
          </div>
          <div style={{width: '100%'}}>
            <Table striped bordered hover className={style.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>*/}
      </main>
      <Footer className={style.footer} />
    </div>
  );
}