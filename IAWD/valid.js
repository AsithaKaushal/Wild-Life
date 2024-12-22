function validateVolunteerForm() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let location = document.getElementById("location").value;
    let terms = document.getElementById("terms").checked;

    // Check if the name is entered
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    // Check if age is a valid number
    if (age < 18 || age > 60) {
        alert("Age must be between 18 and 60.");
        return false;
    }

    // Ensure location is selected
    if (location === "") {
        alert("Please select a location.");
        return false;
    }

    // Ensure terms and conditions are accepted
    if (!terms) {
        alert("You must accept the terms and conditions.");
        return false;
    }

    return true; // Form is valid, allow submission
}

function validateContactForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Check if the name is entered
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    // Check if the email is entered
    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    // Ensure email is valid
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email.");
        return false;
    }

    // Check if the message is entered
    if (message === "") {
        alert("Please enter a message.");
        return false;
    }

    return true;
}
