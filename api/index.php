<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.datatables.net/v/dt/jq-3.7.0/dt-1.13.6/datatables.min.css" rel="stylesheet">
</head>
<body>
    <table id="tabla">
    <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Correo</th>
            <th>Direccion</th>
        </tr>
    </thead>
    </table>
<script src="https://cdn.datatables.net/v/dt/jq-3.7.0/dt-1.13.6/datatables.min.js"></script>
<script>
    $(()=>{
        const body = new FormData();
        body.append("opcion", "mostrar");
        fetch("http://localhost/api/proveedor.php", {
            method: 'POST',
            body: body
        })
        .then(response => response.json())
        .then(res => {
            if (res.cod) {
                $('#tabla').DataTable({
                    data:res.resultado,
                    columns: [{data: 'ID'},
                    {data: 'Nombre'},
                    {data: 'Telefono'},
                    {data: 'Correo'},
                    {data: 'Direccion'}],
                    language: {
                        url: 'es-ES.json',
                    },
                    autoWidth: false
                });
            }
        })
        .catch(error => console.log('error', error));
    });

    /*
    
    const llenarTabla = (resultado) => {
        return new Promise(resolver => {

            tablaControl.clear().draw();

            resultado.forEach(fila => {
                // console.log(fila);
                //tablaControl.row.add([fila.nombre, fila.id, button.outerHTML]).draw().node();
                tablaControl.row.add(fila).draw().node();
            });

            resolver();
        })
    }
    */
</script>
</body>
</html>