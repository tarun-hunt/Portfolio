// Tarun's JavaScript - 2.js

document.addEventListener("DOMContentLoaded", () => {
  // ✅ 1. Scroll Animation
  const sections = document.querySelectorAll(".section");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "slideIn 1s ease forwards";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach((section) => {
    section.style.opacity = 0;
    observer.observe(section);
  });
  
  // ✅ 2. Typewriter effect for h1
  const title = document.querySelector("h1");
  const text = title.textContent;
  title.textContent = "";
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  
  typeWriter();
  
  // ✅ 3. Form Submit Alert
  const submitBtn = document.querySelector(".submit");
  if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Thanks for your feedback, Tarun appreciates it! 🚀");
    });
  }
  
  // ✅ 4. Dark Mode Toggle (using switch)
  const toggleCheckbox = document.getElementById("darkModeSwitch");
  if (toggleCheckbox) {
    toggleCheckbox.addEventListener("change", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
});