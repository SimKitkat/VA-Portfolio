const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("show");
  }
});
// Dark mode toggle
const toggleBtn = document.getElementById("mode-toggle");
const htmlTag = document.documentElement;

toggleBtn.addEventListener("click", () => {
  htmlTag.classList.toggle("dark");
  htmlTag.classList.toggle("light");
});

// Form (fake) submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for reaching out! I’ll reply super soon 🌸✨");
  });
