const form = document.getElementById('loginForm');

// Rest of the code remains the same
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Previene el comportamiento predeterminado del formulario (recargar la página)

  // Mueve la obtención de username y password aquí, dentro del evento submit
  var username = document.getElementById('floatingInput').value;
  var password = document.getElementById('floatingPassword').value;

  const apiUrl = `https://localhost:7185/api/Cliente`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa.');
      }
      // Obtener el contenido de la respuesta como texto
      return response.json();
    })
    .then((clientes) => {
      // Verificar si hay un cliente con las credenciales proporcionadas
      const clienteEncontrado = clientes.find(
        (cliente) => cliente.nombre === username && cliente.contraseña === password
      );

      if (clienteEncontrado) {
        // Credenciales válidas, redireccionar a la página deseada
        window.location.href = 'pageReservas.html';
      } else {
        // Credenciales inválidas, mostrar un mensaje de error
        alert('Credenciales incorrectas. Por favor, intenta nuevamente.');
      }
    })
  
});
