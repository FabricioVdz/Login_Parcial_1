document.addEventListener("DOMContentLoaded", function () {
    // Obtener el formulario
    const loginForm = document.querySelector("form");

    // Agregar un evento de escucha al formulario cuando se envía
    loginForm.addEventListener("submit", function (event) {
        // Obtener los valores de los campos de entrada
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validar si los campos están vacíos
        if (username === "" || password === "") {
            // Evitar que el formulario se envíe
            event.preventDefault();
            alert("Por favor, complete todos los campos.");
        } else {
            // Aquí puedes añadir la lógica para autenticar al usuario
            alert("Inicio de sesión exitoso.");
        }
    });
});
