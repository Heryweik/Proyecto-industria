import { useEffect, useState } from 'react';

export default function DeployFileReader() {
    const [fileContent, setFileContent] = useState('');

    useEffect(() => {

      // lectura del archivo
      fetch('../../../deploy.sh')
        .then(response => response.text())
        .then(content => setFileContent(content))
        .catch(error => console.error('Error al leer deploy.sh:', error));
    }, []);
  
    return (
        <pre>{fileContent}</pre>
    );
  }
