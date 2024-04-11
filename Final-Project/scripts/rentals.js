document.addEventListener('DOMContentLoaded', function () {
    fetch('data/rentals.json')
        .then(response => response.json())
        .then(data => {
            const rentalsTable = document.getElementById('rentalsTable');

            data.rentals.forEach(rental => {
                const row = rentalsTable.insertRow();
                row.innerHTML = `
                    <td>${rental.type}</td>
                    <td>${rental.maxPersons}</td>
                    <td>$${rental.halfDayReservation}</td>
                    <td>$${rental.fullDayReservation}</td>
                    <td>$${rental.halfDayWalkIn}</td>
                    <td>$${rental.fullDayWalkIn}</td>
                `;
            });
        })
        .catch(error => {
            console.error('Error fetching rentals data:', error);
        });
});
