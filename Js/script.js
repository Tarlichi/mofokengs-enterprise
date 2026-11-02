document.addEventListener('DOMContentLoaded', function() {

    // --- ENQUIRY FORM VALIDATION ---
    const enquiryForm = document.getElementById('enquiry-form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const fullName = document.getElementById('full-name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (fullName === '' || email === '' || message === '') {
                alert('Please fill in all required fields (Name, Email, Message).');
            } else if (!email.includes('@')) {
                alert('Please enter a valid email address.');
            } else {
                alert('Thank you, ' + fullName + '! Your enquiry has been submitted successfully.');
                enquiryForm.reset(); 
            }
        });
    }

    // --- CONTACT FORM VALIDATION ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const subject = document.getElementById('contact-subject').value.trim();
            const message = document.getElementById('contact-message').value.trim();

            if (name === '' || email === '' || subject === '' || message === '') {
                alert('Please fill in all required fields.');
            } else if (!email.includes('@')) {
                alert('Please enter a valid email address.');
            } else {
                alert('Message sent! Thank you for contacting Mofokeng\'s Enterprise.');
                contactForm.reset(); 
            }
        });
    }
});