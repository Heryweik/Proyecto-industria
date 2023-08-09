/* import { useEffect, useState } from 'react'; */

export default function DeployFileReader() {
    /* const [fileContent, setFileContent] = useState('');

    useEffect(() => {

      // lectura del archivo
      fetch('D:/UNAH/Industria/nuevoDisenio/Proyecto-industria')
        .then(response => response.text())
        .then(content => setFileContent(content))
        .catch(error => console.error('Error al leer deploy.sh:', error));
    }, []); */
  
    return (
      <div>
        cd Proyecto-industria
git pull origin Diseño
cd frontend
npm install
npm run dev
      </div>
      
    );
  }
