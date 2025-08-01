// Dark mode toggle
const darkToggle = document.getElementById("dark-toggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  darkToggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
  localStorage.setItem("theme", document.body.classList.contains("light-mode") ? "light" : "dark");
});

// Language toggle
const langToggle = document.getElementById("lang-toggle");
langToggle.addEventListener("click", () => {
  const current = langToggle.textContent;
  langToggle.textContent = current === "🇺🇸" ? "🇪🇸" : "🇺🇸";
  // Optional: add content switch logic here
});

// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Load preferred theme
window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    document.body.classList.add("light-mode");
    darkToggle.textContent = "☀️";
  }
});
