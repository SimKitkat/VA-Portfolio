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

const emojis = document.querySelectorAll(".floating-emojis span");

emojis.forEach((emoji) => {
  const left = Math.random() * 100;
  const delay = Math.random() * 10;
  const duration = 8 + Math.random() * 5;

  emoji.style.left = `${left}%`;
  emoji.style.animationDelay = `${delay}s`;
  emoji.style.animationDuration = `${duration}s`;
});
