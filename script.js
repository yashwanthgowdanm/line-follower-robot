// script.js
// This file can be used for any future interactive elements on your website.
// For now, it's empty as the site is primarily static content.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Highlight active navigation link based on current page
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // You can add more JavaScript functionality here as needed.
    // For instance, a "scroll to top" button, image carousels, etc.
});
