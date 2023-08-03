/* import { Link } from "react-router-dom"; */
import style from "./ventasStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ventas from "../assets/img/ventas.svg";

export default function Ventas() {
  return (
    <div className={style.containerFluid}>
      <NavBar/>
      <main className={style.main}>
        <div className={style.head}>
            <div>
              <img src={ventas} alt="" className={style.img} />
            </div>
            <div>
              <h1 style={{ fontWeight: "700" }}>Ventas</h1>
            </div>

          </div>
      </main>
      <Footer className={style.footer}/>

    </div>

  );
}
