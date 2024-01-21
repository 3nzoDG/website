// Loader
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
});

// toTopBtn
const upBtn = document.querySelector(".btnUp");

window.addEventListener("scroll", (event) => {
  if (window.scrollY > 300) {
    upBtn.classList.add("show");
  } else {
    upBtn.classList.remove("show");
  }
});

upBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Text présentation
const element = document.getElementById("animated-text");
const words = ["Enzo Di Giovanni.", "un développeur !"];
let currentWordIndex = 0;
let isDeleting = false;

function updateText() {
  let currentWord = words[currentWordIndex];
  let currentText = element.innerHTML;

  if (isDeleting) {
    // Supprimer un caractère
    element.innerHTML = currentWord.substring(0, currentText.length - 1);

    if (currentText.length === 0) {
      // Passer au mot suivant et commencer à ajouter des lettres
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
    }
  } else {
    // Ajouter un caractère
    element.innerHTML = currentWord.substring(0, currentText.length + 1);

    if (currentText.length === currentWord.length) {
      // Commencer à supprimer des lettres après un délai
      isDeleting = true;
      setTimeout(updateText, 1500); // Délai avant de commencer à supprimer
      return;
    }
  }

  // Vitesse d'ajout ou de suppression des lettres
  let timeout = isDeleting ? 100 : 50;
  setTimeout(updateText, timeout);
}

// Initialiser l'animation
setTimeout(updateText, 200);

// Récuperer les nav-link
// Écouter quand un nav-link est clické
// Récuperer l'href du nav-link clické et trouver la section qui à ce href (ID de la section)
// Scroll jusqu'à l'élement (scroll to)

const navLinks = document.querySelectorAll(".nav-link");
const navHeight = document.getElementById("navHeader").offsetHeight;

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = navLink.getAttribute("href");
    const section = document.querySelector(sectionId);
    window.scrollTo({
      top: section.offsetTop - navHeight,
      left: 0,
      behavior: "smooth",
    });
    console.log(section.offsetTop);
  });
});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    if (scrollY >= section.offsetTop - navHeight) {
      const activeNavLink = document.querySelector(".nav-link.active");
      if (activeNavLink) {
        activeNavLink.classList.remove("active");
      }
      const navLink = document.querySelector(
        ".nav-link[href='#" + section.id + "']"
      );
      navLink.classList.add("active");
    }
  });
});
