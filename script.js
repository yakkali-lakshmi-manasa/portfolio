// Scroll Spy: highlight sidebar links based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidebar nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;  // Offset for better accuracy
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Smooth scroll for nav links
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 50,
      behavior: 'smooth'
    });
  });
});
window.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.add("glow-once");

  setTimeout(() => {
    sidebar.classList.remove("glow-once");
  }, 1500);
});
