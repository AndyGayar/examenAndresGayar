document.getElementById('alertButton').addEventListener('click', function() {
    alert('¡Hola! Este es un mensaje de saludo.');
});

document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const formDataDiv = document.getElementById('formData');
    formDataDiv.innerHTML = `<p>Nombre: ${name}</p><p>Correo Electrónico: ${email}</p>`;
});