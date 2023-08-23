import "bootstrap/dist/css/bootstrap.css";
import style from "./footerStyle.module.css";


import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Footer() {
  const { id } = useParams();

  /* Consumo del backend */
  const [usuarios, setUsuarios] = useState([]);

  const fetchUsuario = () => {
    axios.get(`http://localhost:3000/usuarios/${id}`)
      .then(response => {
        // Actualizar el estado con los datos obtenidos
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los clientes:', error);
      });
  };

  useEffect(() => {
    fetchUsuario();
  }, []);

  return (
    <div className={style.Nav}>
      
      <p style={{margin: '.8rem'}}>@YhonnyAplicano_2023</p>

      {usuarios.map(usuario => (
      <span key={usuario.usuario_id}>Tipo de suscripcion: {usuario.suscripcion}</span>
      ))}

    </div>
  );
}
