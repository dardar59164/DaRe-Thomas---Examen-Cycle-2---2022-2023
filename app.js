// ↓↓ CSS Related Objects↓↓
const buttonCSS = document.querySelector("button");
const playerTextArea = document.querySelector("#Player-CSS");
const labyrinthTextArea = document.querySelector("#Labyrinth-CSS");
const goalTextArea = document.querySelector("#Goal-CSS");
let playerMockCSS = document.querySelector("#playerMockCSS");
let labyMockCSS = document.querySelector("#labyMockCSS");
let goalMockCSS = document.querySelector("#goalMockCSS");
const editeur = document.querySelector(".editeur");

// ↓↓ Level Selection Objets ↓↓
const lvlActuel = document.querySelectorAll("span.actuel");
const lvlFinal = document.querySelectorAll("span.total");
const lvlSelector = document.querySelector(".prevent-select");
const lvlTooltip = document.querySelector("#Tooltip-Niveaux");
const leftArrow = document.querySelector(".arrow#Left");
const rightArrow = document.querySelector(".arrow#Right");
const niveaux = document.querySelectorAll(".niveau");

// ↓↓ Game Objects ↓↓
const labyrinth = document.querySelector("#Labyrinthe");
const player = document.querySelector("#Player");
const endScreen = document.querySelector("#levelEndScreen");
const nextLevelButton = document.querySelector("#Next");

// ↓↓ Level Selection ↓↓
const totalLevel = 8;
let currentLevel = 1;

// ↓↓ Lancement du niveau 1 à l'arrivée sur la page ↓↓
window.onload = () => {
  lvlActuel.forEach((element) => {
    element.innerHTML = currentLevel;
  });
  lvlFinal.forEach((element) => {
    element.innerHTML = totalLevel;
  });
  leftArrow.classList.add("disabled");
  lvlTooltip.classList.contains("hidden")
    ? (lvlTooltip.style.display = "none")
    : (lvlTooltip.style.display = "grid");
  generateMap(currentLevel);
  displayTextFor(currentLevel);
};

// ↓↓ Ouvre la fenêtre de sélection des niveaux ↓↓
lvlSelector.addEventListener("click", (event) => {
  lvlTooltip.classList.toggle("hidden");
  lvlTooltip.classList.contains("hidden")
    ? (lvlTooltip.style.display = "none")
    : (lvlTooltip.style.display = "grid");
});

// ↓↓ Revenir au niveau précédent ↓↓
leftArrow.addEventListener("click", () => {
  if (currentLevel > 1) {
    currentLevel--;
    generateMap(currentLevel);
    displayTextFor(currentLevel);
  }
});

// ↓↓ Passer au niveau suivant ↓↓
rightArrow.addEventListener("click", () => {
  if (currentLevel < totalLevel) {
    currentLevel++;
    generateMap(currentLevel);
    displayTextFor(currentLevel);
  }
});

// ↓↓ Sélection rapide des niveaux ↓↓
niveaux.forEach((element) => {
  element.addEventListener("click", () => {
    currentLevel = parseInt(element.innerHTML);
    generateMap(currentLevel);
    displayTextFor(currentLevel);
  });
});

// ↓↓ CSS Text Logic ↓↓
buttonCSS.addEventListener("click", () => {
  let goal = document.querySelector("#Exit");
  // ↓↓ Récupère les valeurs des textAreas ↓↓
  let playerCSS = playerTextArea.value;
  let labyrinthCSS = labyrinthTextArea.value;
  let goalCSS = goalTextArea.value;

  // ↓↓ Vérifie si le textArea contient bien une propriété transform ↓↓
  if (
    playerCSS.includes("transform:") ||
    labyrinthCSS.includes("transform:") ||
    goalCSS.includes("transform:")
  ) {
    // ↓↓ Affichage dynamique des faux CSS basé sur la fonction initGame() ↓↓
    if (playerMockCSS.style.display == "block") {
      player.style.cssText += playerCSS;
    }
    if (labyMockCSS.style.display == "block") {
      labyrinth.style.cssText += labyrinthCSS;
    }
    if (goalMockCSS.style.display == "block") {
      goal.style.cssText += goalCSS;
    }
  } else {
    // ↓↓ Feedback en cas d'erreur ou de cases vides ↓↓
    editeur.classList.add("shake");
    setTimeout(() => {
      editeur.classList.remove("shake");
    }, 1000);
  }
});

// ↓↓ Affichage des instructions correspondantes à chaque niveau ↓↓
let instructions = document.querySelectorAll("article[data-instruction-level]");
function displayTextFor(anyLevel) {
  instructions.forEach((element) => {
    parseInt(element.dataset.instructionLevel) == anyLevel
      ? (element.style.display = "block")
      : (element.style.display = "none");
  });
}

// ↓↓ Changement de niveau ↓↓
nextLevelButton.addEventListener("click", () => {
  if (currentLevel < totalLevel) {
    currentLevel++;
    generateMap(currentLevel);
    displayTextFor(currentLevel);
  }
});
