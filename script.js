// Mobile navigation
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuButton.textContent = "✕";
  } else {
    menuButton.textContent = "☰";
  }
});


// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuButton.textContent = "☰";
  });
});


// Automatically update footer year
document.getElementById("year").textContent =
  new Date().getFullYear();


// Simple reveal animation
const revealElements = document.querySelectorAll(
  ".section-heading, .project-card, .skill-card, .stat-card, .timeline-item"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});
