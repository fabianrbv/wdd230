const membersURL = "https://github.com/fabianrbv/wdd230/chamber/data/members.json";

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.getElementById("display");

gridButton.addEventListener("click", () => toggleView("grid"));
listButton.addEventListener("click", () => toggleView("list"));

function toggleView(view) {
    display.className = view; // Set the class name to the desired view
    loadData(); // Load data based on the selected view
}

function loadData() {
    fetch(membersURL)
        .then(response => response.json())
        .then(data => displayMembers(data.members, display.className))
        .catch(error => console.error("Error fetching data:", error));
}

function displayMembers(members, view) {
    display.innerHTML = ""; // Clear previous content

    members.forEach(member => {
        const section = document.createElement('section');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const a = document.createElement('a');

        img.src = member.image;
        img.alt = member.name;

        h3.textContent = member.name;
        p.textContent = member.other_information;
        a.href = member.website;
        a.textContent = "Details";

        section.appendChild(img);
        section.appendChild(h3);
        section.appendChild(p);
        section.appendChild(a);

        display.appendChild(section);
    });

    if (view === 'list') {
        display.classList.add('list');
    } else {
        display.classList.remove('list');
    }
}

// Load initial data
loadData();
