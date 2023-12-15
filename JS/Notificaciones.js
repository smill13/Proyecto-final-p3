document.addEventListener("DOMContentLoaded", function () {
    const confirmButton = document.querySelector("#confirm-button");
    const gmailInput = document.querySelector("#gmail-input");

    let hotelSeleccionado = {
        nombre: "",
        descripcion: ""
    };

    // Manejar clic en el enlace de reserva
    document.querySelectorAll('.hotel-link').forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evitar que el enlace redireccione

            hotelSeleccionado.nombre = link.dataset.hotelName;
            const descripcionTextArea = document.querySelector("#exampleFormControlTextarea1");
            hotelSeleccionado.descripcion = descripcionTextArea.value.trim();

            alert(`Hotel seleccionado: ${hotelSeleccionado.nombre}`);
        });
    });

    // Manejar clic en el botón de confirmación
    confirmButton.addEventListener("click", function () {
        const email = gmailInput.value;

        if (!hotelSeleccionado.nombre) {
            alert("Por favor, selecciona un hotel antes de confirmar la reserva.");
            return;
        }

        const asunto = `Reserva hotel ${hotelSeleccionado.nombre}`;
        const mensaje = `Mensaje específico del hotel ${hotelSeleccionado.nombre}. Descripción: ${hotelSeleccionado.descripcion}`;

        if (email) {
            const apiUrl = `https://localhost:7185/api/Email/EnviarEmail?Email=${encodeURIComponent(email)}&Asunto=${encodeURIComponent(asunto)}&Mensaje=${encodeURIComponent(mensaje)}`;

            fetch(apiUrl)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.text();
                })
                .then((data) => {
                    alert("Respuesta de la API: " + data);
                })
                .catch((error) => {
                    console.error("Error al realizar la solicitud:", error.message);
                    alert("Hubo un error al realizar la solicitud a la API.");
                });
        }
    });
});
