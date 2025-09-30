/*

// =========================
// Navbar Mobile Toggle
// =========================
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// =========================
// Scroll Reveal Animations
// =========================
if (typeof ScrollReveal !== "undefined") {
  ScrollReveal().reveal('.product-card', { 
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    duration: 800,
    reset: true
  });

  ScrollReveal().reveal('.hero h1, .hero p, .hero .btn', {
    delay: 300,
    distance: '30px',
    origin: 'top',
    duration: 900
  });
}

// =========================
// Review Carousel
// =========================
const reviews = document.querySelectorAll('.review');
let index = 0;
if (reviews.length > 0) {
  setInterval(() => {
    reviews[index].classList.remove('active');
    index = (index + 1) % reviews.length;
    reviews[index].classList.add('active');
  }, 3000);
}
