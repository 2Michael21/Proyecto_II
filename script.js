document.addEventListener('DOMContentLoaded', function () {
    const clienteForm = document.getElementById('clienteForm');


    clienteForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const cedula = document.getElementById('cedula').value;
        const correo = document.getElementById('correo').value;

        // Mostrar los datos del cliente en un cuadro aparte
        datosClienteDiv.innerHTML = `
            <h2>Datos del Cliente:</h2>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Apellido:</strong> ${apellido}</p>
            <p><strong>Cedula:</strong> ${cedula}</p>
            <p><strong>Correo:</strong> ${correo}</p>
        `;

        // Puedes agregar código adicional aquí para procesar los datos del cliente.
    });
});

