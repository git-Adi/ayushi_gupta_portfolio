document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            // Toggle active class on hamburger
            this.classList.toggle('active');
            
            // Toggle active class on nav menu
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});