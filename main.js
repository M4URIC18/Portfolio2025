// Theme Toggle 
/*
const toggle = document.getElementById("theme-toggle");
toggle?.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
}); */


// 🌗 Auto Dark Mode + Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

// Apply saved or system theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme);
} else {
  setTheme(prefersDark.matches ? "dark" : "light");
}

// Toggle button handler
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
}


// Scroll reveal (basic)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("revealed");
  });
});
document.querySelectorAll("section, .card").forEach((el) => observer.observe(el));


// Navbar hide on scroll down
let lastScroll = 0;
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  const current = window.pageYOffset;
  if (current > lastScroll) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }
  lastScroll = current;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
  });
});


// Scroll Reveal for elements with .reveal
const revealEls = document.querySelectorAll('.reveal');

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // reveal once
        }
      });
    },
    { threshold: 0.2 }
  );

  revealEls.forEach(el => observer.observe(el));
}


// Email Click

// Copy Email to Clipboard + Tooltip
const copyBtn = document.getElementById("copyEmail");
const tooltip = document.getElementById("tooltip");

if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    const email = "mauricio.embusperez@jjay.cuny.edu"; // <- email
    navigator.clipboard.writeText(email).then(() => {
      tooltip.classList.add("show");
      setTimeout(() => tooltip.classList.remove("show"), 2000);
    });
  });
}



