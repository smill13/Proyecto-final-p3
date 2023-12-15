// ActualizarClientes.js

function actualizarcliente() {
    // Lógica para obtener los datos del cliente a actualizar desde los inputs
    const idCliente = document.getElementById("update-id-input").value;
    const nuevoNombre = document.getElementById("update-nombre-input").value;
    const nuevoEmail = document.getElementById("update-email-input").value;
    const nuevoPassword = document.getElementById("update-password-input").value;

    // Lógica para realizar la solicitud PUT a la API de actualizar cliente
    fetch('https://localhost:7185/api/Clientes/EditarObjeto', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: idCliente,
            nombre: nuevoNombre,
            email: nuevoEmail,
            password: nuevoPassword,
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Implementa la lógica para manejar la respuesta de la API
        // Puedes mostrar un mensaje o actualizar la tabla después de actualizar
        console.log('Cliente actualizado:', data);
    })
    .catch(error => console.error('Error al actualizar cliente:', error));
}
