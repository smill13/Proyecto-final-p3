document.addEventListener('DOMContentLoaded', () => {
    const isPasswordSecure = password => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

    const form = document.getElementById('userForm');
    const username = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const gmailInput = document.getElementById('Gmail');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario (recargar la página)

        const apiUrl = `https://localhost:7185/api/Clientes/CrearObjeto`;

        const password = passwordInput.value.trim();

        // Validar la fortaleza de la contraseña
        if (!isPasswordSecure(password)) {
            alert('La contraseña es débil. Asegúrate de que tenga al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.');
            return;
        }

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                clienteId: 0,
                nombre: username.value.trim(),
                gmail: gmailInput.value.trim(),
                contraseña: password,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    // Manejar errores específicos aquí
                    alert('La solicitud no fue exitosa.\n Código de estado: ' + response.status);
                   }
                return response.json(); // Se espera una respuesta JSON
            })

            .then((data) => {
                // Aquí puedes realizar cualquier acción que desees con los datos de la respuesta
                console.log('Respuesta API:', data);
                alert('Usuario registrado correctamente');
                // Por ejemplo, puedes mostrar una alerta con el mensaje de éxito o hacer algo más con la respuesta.
            })
    });
});
