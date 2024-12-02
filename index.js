// When the 'Start' button is clicked, show the form
document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('startButton').style.display = 'none'; // Hide the start button
    document.getElementById('formContainer').style.display = 'block'; // Show the form container
});

// Optional: Handle form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    alert('Form Submitted!'); // Simulate a successful submission
});
