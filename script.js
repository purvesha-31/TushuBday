// ─────────────────────────────────────────────────────────────────────────────
// Welcome Screen ➜ Show main content & smooth scroll helper
// ─────────────────────────────────────────────────────────────────────────────
const enterBtn = document.getElementById("enterBtn");
const mainContent = document.getElementById("mainContent");

enterBtn?.addEventListener("click", () => {
  mainContent.classList.remove("hidden");
  mainContent.scrollIntoView({ behavior: "smooth" });
});

// ─────────────────────────────────────────────────────────────────────────────
// Fade‑in sections on scroll using Intersection Observer API
// ─────────────────────────────────────────────────────────────────────────────
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.1,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach((section) => {
  appearOnScroll.observe(section);
});

// ─────────────────────────────────────────────────────────────────────────────
// Floating Stars Animation ✨ (Cute Ghibli‑ish night vibe)
// ─────────────────────────────────────────────────────────────────────────────
function createStar() {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(star);

  // Remove star after animation ends (5s safe‑guard)
  setTimeout(() => star.remove(), 5000);
}

setInterval(createStar, 800);
