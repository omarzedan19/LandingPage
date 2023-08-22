document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetHref = link.getAttribute("href");
        const targetSection = document.querySelector(targetHref);
  

  
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });
  