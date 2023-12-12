document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar envío del formulario
  
    // Obtiene los valores de usuario y contraseña ingresados
    var username = document.getElementById('floatingInput').value;
    var password = document.getElementById('floatingPassword').value;
  
    // Aquí debes realizar la validación de las credenciales
    // Puedes hacerlo mediante una comparación simple o utilizando una llamada a una API o base de datos
  
    // Ejemplo de validación básica (usuario: "admin", contraseña: "password
    if (username === 'admin' && password === 'admin') {
      // Credenciales válidas, redirecciona a Home.html
      window.location.href = 'pageReservas.html';
    } else {
      // Credenciales inválidas, muestra un mensaje de error
      alert('Credenciales incorrectas. Por favor, intenta nuevamente.');
    }
  });
  