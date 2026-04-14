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

// Meeting Scheduler - Time Slot Selection
const timeSlots = document.querySelectorAll('.time-slot');
const selectedTimeInput = document.getElementById('selectedTime');

if (timeSlots.length > 0) {
    timeSlots.forEach(slot => {
        slot.addEventListener('click', function() {
            // Remove selected class from all slots
            timeSlots.forEach(s => s.classList.remove('selected'));
            // Add selected class to clicked slot
            this.classList.add('selected');
            // Set hidden input value
            const timeValue = this.getAttribute('data-time');
            if (selectedTimeInput) {
                selectedTimeInput.value = timeValue;
            }
        });
    });
}

// Meeting Booking Form Submission
const bookingForm = document.getElementById('bookingForm');
const bookingMessage = document.getElementById('bookingMessage');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('meetingName').value;
        const email = document.getElementById('meetingEmail').value;
        const date = document.getElementById('meetingDate').value;
        const selectedTime = selectedTimeInput ? selectedTimeInput.value : '';
        const meetingType = document.getElementById('meetingType').value;
        
        // Validation
        if (name === '' || email === '' || date === '' || selectedTime === '' || meetingType === '') {
            bookingMessage.textContent = 'Please fill all required fields and select a time slot';
            bookingMessage.className = 'form-message error';
            return;
        }
        
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            bookingMessage.textContent = 'Please enter a valid email address';
            bookingMessage.className = 'form-message error';
            return;
        }
        
        // Success message
        bookingMessage.textContent = `Thank you ${name}! Your meeting is scheduled for ${date} at ${selectedTime}. We'll send a confirmation to ${email}.`;
        bookingMessage.className = 'form-message success';
        
        // Clear form
        bookingForm.reset();
        
        // Clear time slot selection
        if (timeSlots.length > 0) {
            timeSlots.forEach(s => s.classList.remove('selected'));
        }
        if (selectedTimeInput) {
            selectedTimeInput.value = '';
        }
        
        // Clear success message after 5 seconds
        setTimeout(() => {
            bookingMessage.textContent = '';
        }, 5000);
    });
}

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

if (backToTopButton) {
    // when scroll page
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // Button click to go at top
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Active Nav Link Highlight on Scroll
const sections = document.querySelectorAll('section');
const navLinksItems = document.querySelectorAll('.nav-links a');

if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}