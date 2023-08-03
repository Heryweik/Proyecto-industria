/* import { Link } from "react-router-dom"; */
import style from "./serviciosStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import servicios from "../assets/img/services.svg";


export default function Servicios() {
  return (
    <div className={style.containerFluid}>
      <NavBar/>
      <main className={style.main}>
        <div className={style.head}>
            <div>
              <img src={servicios} alt="" className={style.img} />
            </div>
            <div>
              <h1 style={{ fontWeight: "700" }}>Servicios</h1>
            </div>

          </div>
      </main>
      <Footer className={style.footer}/>

    </div>

  );
}
