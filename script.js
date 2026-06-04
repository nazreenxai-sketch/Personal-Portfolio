function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

$("#contactForm").submit(function(e) { 
    // 1. Prevent the form from submitting the default way
    e.preventDefault();

    let valid = true;

    // 2. Perform all your validation checks
    // Name Validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Email Validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = 'Please enter a valid email.';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Message Validation
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (message.value.trim() === '') {
        messageError.textContent = 'Message cannot be empty.';
        valid = false;
    } else {
        messageError.textContent = '';
    }

    // 3. If validation fails, stop the function here
    if (!valid) {
        return; 
    }

    // 4. If validation passes, proceed with the AJAX submission
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbydPXGKUqu-ydWG6WfS5dZr-jKomyMzLsyzC0P4r1WG5Jqa__KnZ0Q--QvZsxdUIiPjcw/exec",
        data: $("#contactForm").serialize(),
        method: "post",
        success: function(response) {
            alert("Form submitted successfully");
            window.location.reload();
        },
        error: function(err) {
            alert("Something Error");
        }
    });
});