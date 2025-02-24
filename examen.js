document.addEventListener('DOMContentLoaded', function() {
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

    document.getElementById('toggleActorListButton').addEventListener('click', function() {
        const actorList = document.getElementById('actorList');
        if (actorList.style.display === 'none') {
            actorList.style.display = 'block';
        } else {
            actorList.style.display = 'none';
        }
    });

    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            const countryListDiv = document.getElementById('countryList');
            const countryNames = data.map(country => country.name.common).sort();
            countryListDiv.innerHTML = '<h2>Lista de Países</h2><ul>' + countryNames.map(name => `<li>${name}</li>`).join('') + '</ul>';
        })
        .catch(error => console.error('Error fetching country data:', error));
});