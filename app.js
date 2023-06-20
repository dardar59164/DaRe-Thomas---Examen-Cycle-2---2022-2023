// ↓↓ CSS Related Objects↓↓
const buttonElement = document.querySelector("button");
const playerTextArea = document.querySelector("#Player-CSS");
const labyrinthTextArea = document.querySelector("#Labyrinth-CSS");
const editeur = document.querySelector(".editeur");

// ↓↓ Level Selection Objets ↓↓
const lvlActuel = document.querySelectorAll("span.actuel");
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
const totalLevel = 6;
let currentLevel = 1;

window.onload = () => {
  lvlActuel.forEach(element => {
    element.innerHTML = currentLevel;
  });
  leftArrow.classList.add("disabled");
  lvlTooltip.classList.contains("hidden")
    ? (lvlTooltip.style.display = "none")
    : (lvlTooltip.style.display = "grid");
  generateMap(currentLevel);
  displayTextFor(currentLevel);
};
lvlSelector.addEventListener("click", (event) => {
  lvlTooltip.classList.toggle("hidden");
  lvlTooltip.classList.contains("hidden")
    ? (lvlTooltip.style.display = "none")
    : (lvlTooltip.style.display = "grid");
});
leftArrow.addEventListener("click", () => {
  if (currentLevel > 1) {
    currentLevel--;
    generateMap(currentLevel);
    displayTextFor(currentLevel);
  }
});
rightArrow.addEventListener("click", () => {
  if (currentLevel < 6) {
    currentLevel++;
    generateMap(currentLevel);
    displayTextFor(currentLevel);
  }
});
niveaux.forEach((element) => {
  element.addEventListener("click", () => {
    currentLevel = parseInt(element.innerHTML);
    generateMap(currentLevel);
    displayTextFor(currentLevel);
  });
});

// ↓↓ CSS Text Logic
buttonElement.addEventListener("click", () => {
  let playerCSS = playerTextArea.value;
  let labyrinthCSS = labyrinthTextArea.value;
  if (playerCSS.includes("transform:") || labyrinthCSS.includes("transform:")) {
    currentLevel == 6
      ? (labyrinth.style.cssText = labyrinthCSS)
      : (player.style.cssText += playerCSS);
  } else {
    editeur.classList.add("shake");
    setTimeout(() => {
      editeur.classList.remove("shake");
    }, 1000);
  }
});

// ↓↓ Gestion du texte ↓↓
let instructions = document.querySelectorAll("article[data-instruction-level]");
function displayTextFor(anyLevel) {
  instructions.forEach((element) => {
    parseInt(element.dataset.instructionLevel) == anyLevel
      ? (element.style.display = "block")
      : (element.style.display = "none");
  });
}

// ↓↓ Collision Logic ↓↓
let playerCollidable = true;

function collided(joueur) {
  playerCollidable = false;
  joueur.classList.toggle("escape");
  setTimeout(() => {
    if (currentLevel < totalLevel) {
      endScreen.showModal();
    }
  }, 2000);
}
// ↓↓ Next Level ↓↓
nextLevelButton.addEventListener("click", () => {
  if (currentLevel < totalLevel) {
    currentLevel++;
    generateMap(currentLevel);
    displayTextFor(currentLevel);
  }
});
function detectCollision(joueur, objectif) {
  let playerRect = joueur.getBoundingClientRect();
  let goalRect = objectif.getBoundingClientRect();
  // console.log("debug")
  if (
    playerCollidable &&
    playerRect.left < goalRect.left + goalRect.width &&
    playerRect.left + playerRect.width > goalRect.left &&
    playerRect.top < goalRect.top + goalRect.height &&
    playerRect.height + playerRect.top > goalRect.top
  ) {
    collided(joueur);
  }
}
window.requestAnimationFrame(gameLoop);

function gameLoop() {
  let player = document.querySelector("#Player");
  let goal = document.querySelector("#Exit");
  detectCollision(player, goal);
  window.requestAnimationFrame(gameLoop);
}
