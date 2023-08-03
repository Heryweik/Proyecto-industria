/* import { Link } from "react-router-dom"; */
import style from "./serviciosStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import cliente from "../../assets/img/user.svg";

export default function Servicios() {
  return (
    <div className={style.containerFluid}>
      <NavBar/>
      <main className={style.main}>
      <img src={cliente} alt="" />
      </main>
      <Footer className={style.footer}/>
    </div>
  );
}
