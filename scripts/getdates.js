document.addEventListener("DOMContentLoaded", function () {
    // Obtener el elemento span con el ID "currentYear"
    var currentYearElement = document.getElementById("currentYear");

    // Obtener el elemento p con el ID "lastModified"
    var lastModifiedElement = document.getElementById("lastModified");

    // Obtener el año actual y establecerlo en el span
    var currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    // Obtener la fecha de última modificación del documento y establecerla en el párrafo
    var lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = "Last modified: " + lastModifiedDate;

    // Manejar el evento click del botón de menú
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
});

function updatePageCounter() {
    let pageVisits = localStorage.getItem('pageVisits') || 0;

    pageVisits++;

    localStorage.setItem('pageVisits', pageVisits);

    document.getElementById('pageCounter').textContent = pageVisits;
}

updatePageCounter();
