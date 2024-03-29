const membersURL = "https://fabianrbv.github.io/wdd230/chamber/data/members.json";

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.getElementById("display");

gridButton.addEventListener("click", () => toggleView("grid"));
listButton.addEventListener("click", () => toggleView("list"));

function toggleView(view) {
    display.className = view; // Establecer la clase del contenedor display
    loadData(); // Cargar datos basados en la vista seleccionada
}

function loadData() {
    fetch(membersURL)
        .then(response => response.json())
        .then(data => displayMembers(data.members, display.className))
        .catch(error => console.error("Error fetching data:", error));
}

function displayMembers(members, view) {
    display.innerHTML = ""; // Limpiar contenido anterior

    members.forEach(member => {
        const section = document.createElement('section');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const addressDiv = document.createElement('div');
        const phoneDiv = document.createElement('div');
        const membershipDiv = document.createElement('div');
        const a = document.createElement('a');

        img.src = member.image;
        img.alt = member.name;
        img.width = 125; // Establecer el ancho de la imagen
        img.height = 100; // Establecer la altura de la imagen

        h3.textContent = member.name;
        addressDiv.textContent = `Address: ${member.address}`;
        phoneDiv.textContent = `Phone: ${member.phone}`;
        membershipDiv.textContent = `Membership Level: ${member.membership_level}`;
        a.href = member.website;
        a.textContent = "Website"; // Cambiar el texto del enlace

        section.appendChild(h3);
        section.appendChild(img);
        section.appendChild(addressDiv);
        section.appendChild(phoneDiv);
        section.appendChild(membershipDiv);
        section.appendChild(a);

        display.appendChild(section);
    });

    if (view === 'list') {
        display.classList.add('list');
    } else {
        display.classList.remove('list');
    }
}

function toggleView(view) {
    display.className = "display " + view; // Agregar la clase view al contenedor display
    loadData(); // Cargar datos basados en la vista seleccionada
}


// Cargar datos iniciales
loadData();