function updateRatingValue(value) {
    document.getElementById('ratingValue').innerText = value;
}

const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#passwordConfirm");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
    if (kp1.value !== kp2.value) {
        message.textContent = "❗Key Phrases DO NOT MATCH!";
        message.style.visibility = "show";
        kp2.style.backgroundColor = "#fff0f3";
        kp2.value = "";
        kp2.focus();
    } else {
        message.style.display = "none";
        kp2.style.backgroundColor = "#fff";
        kp2.style.color = "#000";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submission
    function handleSubmit(event) {
        // Prevent default form submission
        event.preventDefault();

        // Access form elements
        let formt = event.target;
        let formData = new FormData(formt);

        // Display form element values
        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
    }
});
