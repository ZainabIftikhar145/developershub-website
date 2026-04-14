// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Click on link ke baad menu close ho jaye
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'Please fill all fields';
            formMessage.className = 'form-message error';
            return;
        }
        
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formMessage.textContent = 'Please enter a valid email address';
            formMessage.className = 'form-message error';
            return;
        }
        
        // Success message
        formMessage.textContent = 'Thank you! Your message has been sent.';
        formMessage.className = 'form-message success';
        
        // Clear form
        contactForm.reset();
        
        // Clear success message after 3 seconds
        setTimeout(() => {
            formMessage.textContent = '';
        }, 3000);
    });
}