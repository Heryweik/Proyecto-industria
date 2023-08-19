import { Link } from "react-router-dom";
import style from "./homeStyle.module.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../../assets/img/logoC.jpeg";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      const installPrompt = event;

      // Mostrar una notificación o botón para instalar la PWA
      const installButton = document.getElementById('install-button');
      installButton.style.display = 'block';

      installButton.addEventListener('click', () => {
        installPrompt.prompt();
        installButton.style.display = 'none';

        installPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('El usuario aceptó instalar la PWA');
          } else {
            console.log('El usuario rechazó la instalación de la PWA');
          }
        });
      });
    });
  }, []);

  return (
    <div className={style.containerFluid}>
      <div id="install-button" className={style.pwa}>
      <button  className={style.pwaB}>
        Instalar aplicacion
      </button>
      </div>
      
      <div className={style.medium}>
        <div className={style.img}>
          <img src={logo} alt="" className={style.logo} />
          
        </div>
      </div>

      <div
        className={`${style.medium} ${style.bienvenido}`}
      >
      
        <div className={style.c1}></div>
        <div className={style.c2}></div>
        <div className={style.c3}></div>
        <div className={style.c4}></div>

        <div className={style.img2}>
          <img src={logo} alt="" className={style.logo} />
        </div>
        <div>
          <h1 className={style.saludo}>Bienvenidos</h1>
        </div>
        <div className={style.boton}>
          <Link to={"/login"}>
            <button className={style.iSesion}>Iniciar sesión</button>
          </Link>
        </div>
        <div className={style.boton}>
          <Link to={"/signup"}>
            <button className={style.iSesion}>Registrarse</button>
          </Link>
        </div>
        
      <div className={style.footer}>
        <p>@Copyright</p>
      </div>
      </div>
    </div>
  );
}
