document.addEventListener("DOMContentLoaded", function () {
    // Obtener el formulario
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function (event) {
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validar si los campos están vacíos
        if (username === "" || password === "") {
            // Evitar que el formulario se envíe
            event.preventDefault();
            alert("Por favor, complete todos los campos.");
        } else {
            // Evitar el comportamiento predeterminado del formulario
            event.preventDefault();
            
            // Mensaje de inicio de sesión exitoso (esto puede ser opcional)
            alert("Inicio de sesión exitoso.");
        }
    });
});

