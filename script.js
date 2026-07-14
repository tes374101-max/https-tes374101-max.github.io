// Colorful Nirnir Website
// script.js

document.addEventListener("DOMContentLoaded", () => {

  // Fade in sections
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, {
    threshold: 0.15
  });

  sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
  });

  // Color card interaction
  const colors = document.querySelectorAll(".color");

  colors.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.06)";
      card.style.transition = "0.25s";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });

    card.addEventListener("click", () => {
      navigator.clipboard.writeText(card.style.background);
      alert("Color copied!");
    });
  });

  // Smooth navigation
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function(e){
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if(target){
        target.scrollIntoView({
          behavior:"smooth"
        });
      }
    });
  });

});