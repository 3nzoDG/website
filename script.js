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
const words = ["Enzo Di Giovanni.", "un développeur !", "un passionné !"];
let currentWordIndex = 0;
let isDeleting = false;

function updateText() {
  let currentWord = words[currentWordIndex];
  let currentText = element.innerHTML;

  if (isDeleting) {
    element.innerHTML = currentWord.substring(0, currentText.length - 1);

    if (currentText.length === 0) {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
    }
  } else {
    element.innerHTML = currentWord.substring(0, currentText.length + 1);

    if (currentText.length === currentWord.length) {
      isDeleting = true;
      setTimeout(updateText, 1500);
      return;
    }
  }

  // Vitesse d'ajout ou de suppression des lettres
  let timeout = isDeleting ? 100 : 50;
  setTimeout(updateText, timeout);
}

// Initialiser l'animation
setTimeout(updateText, 200);

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
      if (section.id == "aboutMe") {
        section.classList.add("showed");
      }
    }
  });
});

// My Projects : overlay
const isHover = (e) => e.parentElement.querySelector(":hover") === e;

const myDiv = document.getElementById("gallery-item");
document.addEventListener("mousemove", function checkHover() {
  const hovered = isHover(myDiv);
  if (hovered !== checkHover.hovered) {
    console.log(hovered ? "hovered" : "not hovered");
    checkHover.hovered = hovered;
    console.log("salut");
  }
});
