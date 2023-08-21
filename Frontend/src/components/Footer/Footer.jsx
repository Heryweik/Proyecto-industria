import "bootstrap/dist/css/bootstrap.css";
import style from "./footerStyle.module.css";

export default function Footer() {
  return (
    <div className={style.Nav}>
      
      <p style={{margin: '.8rem'}}>@YhonnyAplicano_2023</p>

      <span>Tipo de suscripcion: VIP</span>
      
    </div>
  );
}
