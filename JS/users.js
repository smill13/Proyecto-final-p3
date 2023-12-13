// Array para almacenar usuarios durante la sesión
const users = [];

// Expresion lambda para validar la fortaleza de la contraseña
const isPasswordSecure = password => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

// Función para añadir un usuario
function addUser() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Verificar si el nombre de usuario ya existe
    if (users.some(user => user.username === username)) {
        alert('Este nombre de usuario ya está en uso. Por favor, elige otro.');
        return;
    }

    // Validar la fortaleza de la contraseña
    if (!isPasswordSecure(password)) {
        alert('La contraseña es débil. Asegúrate de que tenga al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.');
        return;
    }

    // Añadir usuario al array
    const newUser = { username, password };
    users.push(newUser);

    // Limpiar campos de entrada
    usernameInput.value = '';
    passwordInput.value = '';

    // Actualizar la lista de usuarios en la página
    updateUsersList();
}

// Función para actualizar la lista de usuarios en la página
function updateUsersList() {
    const userList = document.getElementById('userList');

    // Limpiar la lista antes de actualizar
    userList.innerHTML = '';

    // Crear elementos de lista para cada usuario
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `Usuario: ${user.username}, Contraseña: ${user.password}`;
        userList.appendChild(listItem);
    });
}
