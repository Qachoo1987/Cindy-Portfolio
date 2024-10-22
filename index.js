// Add interactivity or animations here

// Example: Form validation (just an example, you can modify it)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let message = document.querySelector('textarea[name="message"]').value;
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      event.preventDefault(); // Prevent form submission if fields are empty
    }
  });
  