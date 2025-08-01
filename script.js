
// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
}

// Load theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

// Mobile Hamburger Toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Navbar shrink and hide on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.classList.add('nav-hidden'); // Scroll down
    } else {
        navbar.classList.remove('nav-hidden'); // Scroll up
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    navbar.classList.toggle('nav-shrink', scrollTop > 50);
});

// Language Toggle (English/Spanish)
const langToggle = document.getElementById('langToggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        document.body.classList.toggle('spanish');
    });
}
