// Obtener el elemento <a> que contiene el enlace a la imagen
var link = document.getElementById("link-imagen");

// Definir una función que cambie el texto de la barra de estado
function cambiarTextoBarraEstado(texto) {
  window.status = texto;
  return true;
}

// Asignar la función al evento onmouseover del enlace
link.onmouseover = function() {
  cambiarTextoBarraEstado("Este es un mensaje personalizado");
};

// Asignar la función al evento onmouseout del enlace
link.onmouseout = function() {
  cambiarTextoBarraEstado("");
};
