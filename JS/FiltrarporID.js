function seleccionarID() {
    const idInput = document.getElementById('id-input');
    const idCliente = idInput.value;
    const HTMLResponse = document.getElementById('cliente-seleccionado');
  
    fetch(`https://localhost:7185/api/Clientes/Filtrar_ID?idCliente=${idCliente}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error en la solicitud');
        }
      })
      .then(cliente => {
        const tpl = `
          <tr>
            <td>ID: ${cliente.clienteId}</td>
            <td>Nombre: ${cliente.nombre}</td>
            <td>Email: ${cliente.gmail}</td>
          </tr>`;
        HTMLResponse.innerHTML = tpl;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  