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
	lastModifiedElement.textContent = lastModifiedDate;

	// Manejar el evento click del botón de menú
	const hamButton = document.querySelector('#menu');
	const navigation = document.querySelector('.navigation');

	hamButton.addEventListener('click', () => {
		navigation.classList.toggle('open');
		hamButton.classList.toggle('open');
	});
});

var toggle = document.getElementById("container");
var body = document.querySelector("body");

toggle.onclick = function () {
	toggle.classList.toggle("active");
	body.classList.toggle("active");
}

// get element to display the message
const message = document.querySelector("#message");

// Function to get the current date in a formatted string
function getCurrentDate() {
	const today = new Date();
	return today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
}

// Function to display the welcome message or the last visit message
function displayMessage() {
	const lastVisitDate = localStorage.getItem("lastVisitDate");

	if (!lastVisitDate) {
		// First visit
		const currentDate = getCurrentDate();
		localStorage.setItem("lastVisitDate", currentDate);
		console.log(`Welcome! Let us know if you have any questions.`);
		message.innerHTML = "Welcome! Let us know if you have any questions.";
	} else {
		// Returning same day
		const currentDate = getCurrentDate();
		if (currentDate == lastVisitDate) {
			console.log("Back so soon! Awesome!");
			message.innerHTML = "Back so soon! Awesome!";
		} else {
			// Returning visit
			const currentDate = getCurrentDate();
			const daysSinceLastVisit = Math.floor(
				(new Date(currentDate) - new Date(lastVisitDate)) /
				(1000 * 60 * 60 * 24)
			);
			console.log(`You last visited ${daysSinceLastVisit} days ago.`);
			message.innerHTML = `You last visited ${daysSinceLastVisit} days ago.`;
			// Update last visit date to today
			localStorage.setItem("lastVisitDate", currentDate);
		}
	}
}

// Call the function
displayMessage();

