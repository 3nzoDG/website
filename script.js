// Loader
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
});

// Burger Btn
const links = document.querySelectorAll("nav li");
const icons = document.querySelector("#icons");
const nav = document.querySelector("#navHeader");
icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
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
// Sélectionnez tous les éléments de la galerie
const galleryItems = document.querySelectorAll(".gallery-item");

// Fonction pour vérifier si la souris survole un élément
function checkHover() {
  galleryItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      // Appliquez ici l'effet de survol souhaité
    });
    item.addEventListener("mouseout", () => {
      // Retirez ici l'effet de survol
    });
  });
}

// Appliquez l'effet de survol à tous les éléments de la galerie
checkHover();

// Effet on CV button
const cvBtn = document.querySelector(".cv");

cvBtn.addEventListener("mouseover", () => {
  cvBtn.style.transform = "scale(1.2)";
  cvBtn.style.color = "#fff";
  cvBtn.style.transition = "0.5s";
  cvBtn.style.border = "2px solid white";
});

cvBtn.addEventListener("mouseout", () => {
  cvBtn.style.color = "black";
});

//Contact btn effect
const contactBtn = document.querySelector(".btn-contact");

contactBtn.addEventListener("mouseover", () => {
  contactBtn.style.transform = "scale(1.2)";
  contactBtn.style.transition = "1s";
  contactBtn.style.color = "#fff";
  contactBtn.style.border = "2px solid white";
});

contactBtn.addEventListener("mouseout", () => {
  contactBtn.style.color = "black";
});

// Copy clipboard

document.querySelectorAll(".icon").forEach((icon) => {
  icon.addEventListener("click", async function () {
    // Lire le texte à copier de l'attribut data-text-to-copy de l'icône cliquée
    let text = this.getAttribute("data-text-to-copy");
    try {
      // Essayer de copier le texte dans le presse-papiers
      await navigator.clipboard.writeText(text);
      alert("Texte copié dans le presse-papiers: " + text);
    } catch (err) {
      // Afficher une erreur si la copie échoue
      console.error("Erreur lors de la copie : ", err);
    }
  });
});

// DropDown menu School

const drpSchool = document.querySelector(".school");
const arrow = document.querySelector(".fa-arrow-down");

arrow.addEventListener("click", () => {
  drpSchool.classList.toggle("openSchool");
  arrow.style.transform =
    arrow.style.transform === "rotate(180deg)"
      ? "rotate(0deg)"
      : "rotate(180deg)";
});
