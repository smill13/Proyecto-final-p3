document.addEventListener('DOMContentLoaded', function () {
    obtenerClientes('https://localhost:7185/api/Clientes/Get_CLientes', 'clientes-list');
  });
  
  function obtenerClientes(url, listaID) {
    const HTMLResponse = document.getElementById(listaID); // Obtén el elemento donde se mostrarán los clientes
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const tpl = data.map(cliente => `
          <tr>
            <td>ID: ${cliente.clienteId}</td>
            <td>Nombre: ${cliente.nombre}</td>
            <td>Email: ${cliente.gmail}</td>
          </tr>`);
        HTMLResponse.innerHTML = tpl.join('');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  