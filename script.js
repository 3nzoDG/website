const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
});

const upBtn = document.querySelector(".btnUp");

upBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

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
