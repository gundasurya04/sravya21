// Hamburger Menu Toggle
// This script handles the mobile navigation menu

document.addEventListener('DOMContentLoaded', () => {
    // Get the elements we need to interact with
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Helper: Update menu state
    // This centralizes the logic for opening/closing the menu
    const updateMenuState = (isOpen) => {
        if (isOpen) {
            navMenu.classList.add('active');
            hamburger.classList.add('active');
            hamburger.setAttribute('aria-expanded', 'true');
        } else {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    };

    // Click the hamburger button to toggle the menu
    hamburger.addEventListener('click', () => {
        const isCurrentlyOpen = navMenu.classList.contains('active');
        updateMenuState(!isCurrentlyOpen);
    });

    // Close menu when a nav link is clicked
    // This lets users navigate without needing to manually close the menu
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            updateMenuState(false);
        });
    });

    // Close menu when Escape key is pressed
    // Standard web accessibility: users can close overlays with Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            updateMenuState(false);
        }
    });

    // Close menu when clicking outside of it
    // Only close if the menu is actually open to avoid unnecessary work
    document.addEventListener('click', (event) => {
        const isMenuOpen = navMenu.classList.contains('active');
        const clickedInNav = navMenu.contains(event.target);
        const clickedHamburger = hamburger.contains(event.target);

        if (isMenuOpen && !clickedInNav && !clickedHamburger) {
            updateMenuState(false);
        }
    });
});

