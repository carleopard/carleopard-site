// Theme toggle
const toggleBtn = document.getElementById('dark-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';
document.body.classList.add(currentTheme);
toggleBtn.innerText = currentTheme === 'dark' ? '🌞' : '🌙';

toggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark');
  document.body.classList.toggle('dark', !isDark);
  document.body.classList.toggle('light', isDark);
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  toggleBtn.innerText = isDark ? '🌙' : '🌞';
});

// Mobile nav toggle
document.getElementById("hamburger").addEventListener("click", () => {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
});

// Navbar hide/show on scroll
let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 80) {
    navbar.style.padding = "10px 20px";
  } else {
    navbar.style.padding = "18px 20px";
  }

  if (currentScrollY > lastScrollY) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollY = currentScrollY;
});

// Language toggle
document.getElementById("lang-toggle").addEventListener("click", () => {
  const currentURL = window.location.href;
  window.location.href = currentURL.includes("index-es") ? "index.html" : "index-es.html";
});