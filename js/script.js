const intro = document.getElementById("intro");
const introLogo = document.getElementById("logo");

// Animation d'entrée (chargement)
if (intro) {
    const tl = gsap.timeline();
    tl.to(introLogo, { opacity: 1, scale: 1.1, duration: 0.2, ease: "power2.out" })
      .to(introLogo, { opacity: 0, scale: 0.8, duration: 0.4, ease: "power2.in" }, "+=0.5")
      .to(intro, { 
          opacity: 0, 
          duration: 0.2, 
          onComplete: () => {
            intro.style.display = "none";
            launchPageAnimations();
          } 
      });
} else {
    // Si pas de loader (pages secondaires), on lance direct
    window.addEventListener("DOMContentLoaded", launchPageAnimations);
}

// Animations globales
function launchPageAnimations() {
    // Apparition des textes
    gsap.to(".fade", { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" });

    // Animation des catégories de compétences
    if (document.querySelector(".skill-category")) {
        gsap.from(".skill-category", { duration: 0.8, y: 30, opacity: 0, stagger: 0.2 });
    }

    // Animation des icônes de compétences
    if (document.querySelector(".skill-icon")) {
        gsap.from(".skill-icon", { duration: 0.5, y: 15, opacity: 0, stagger: 0.03, delay: 0.3, ease: "power2.out" });
    }

    // Animation de la galerie de photos
    if (document.querySelector(".gallery-grid img")) {
        gsap.from(".gallery-grid img", { duration: 0.8, scale: 0.9, opacity: 0, stagger: 0.1 });
    }
}

// Memu burger (responsive)
const burger = document.querySelector(".burger");
const navMenu = document.querySelector("nav");
if (burger) {
    burger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

//Bouton retour en haut de page
const backToTop = document.getElementById("back-to-top");
if (backToTop) {
    window.addEventListener("scroll", () => {
        backToTop.classList.toggle("show", window.scrollY > 250);
    });
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Thème (sombre par défaut, clair en option)
const toggleBtn = document.getElementById("theme-toggle");
if (toggleBtn) {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-theme");
        toggleBtn.textContent = "🌙";
    } else {
        toggleBtn.textContent = "☀️";
    }
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        const isLight = document.body.classList.contains("light-theme");
        toggleBtn.textContent = isLight ? "🌙" : "☀️";
        localStorage.setItem("theme", isLight ? "light" : "dark");
    });
}
