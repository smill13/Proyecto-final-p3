function eliminarCliente() {
    const id = document.getElementById('delete-id-input').value;

    fetch(`https://localhost:7185/api/Clientes/EliminarPorID?ID=${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            console.log('Cliente eliminado');
            obtenerClientes(); // Asegúrate de tener la función obtenerClientes() definida
        } else {
            throw new Error('Error en la solicitud');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
