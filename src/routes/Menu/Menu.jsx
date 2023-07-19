/* import { Link } from "react-router-dom"; */
import style from "./menuStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../../components/NavBar/NavBar";

export default function Menu() {
  return (
    <div className={style.containerFluid}>
      <NavBar/>
      <aside>Hola</aside>
      <article>Vaca</article>
    </div>
  );
}
