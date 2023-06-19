// ↓↓ CSS Related Objects↓↓
const buttonElement = document.querySelector("button");
const textAreaElement = document.querySelector("#CSS-Prompt");

// ↓↓ Level Selection Objets ↓↓
const lvlActuel = document.querySelector("span.actuel");
const lvlSelector = document.querySelector(".prevent-select");
const lvlTooltip = document.querySelector("#Tooltip-Niveaux");
const leftArrow = document.querySelector(".arrow#Left");
const rightArrow = document.querySelector(".arrow#Right");
const niveaux = document.querySelectorAll(".niveau");

// ↓↓ Game Objects ↓↓
const labyrinth = document.querySelector("#Labyrinthe");
const player = document.querySelector("#Player");

// ↓↓ Level Selection ↓↓
const totalLevel = 6;
let currentLevel = 1;

window.onload = () => {
  lvlActuel.innerHTML = currentLevel;
  leftArrow.classList.add("disabled");
  generateMap(currentLevel);
};
lvlSelector.addEventListener("click", (event) => {
  lvlTooltip.classList.toggle("hidden");
  lvlTooltip.classList.contains("hidden")
    ? (lvlTooltip.style.display = "none")
    : (lvlTooltip.style.display = "grid");
  event.stopPropagation();
});
leftArrow.addEventListener("click", () => {
  if (currentLevel > 1) {
    currentLevel--;
    generateMap(currentLevel);
  }
});
rightArrow.addEventListener("click", () => {
  if (currentLevel < 6) {
    currentLevel++;
    generateMap(currentLevel);
  }
});
niveaux.forEach((element) => {
  element.addEventListener("click", () => {
    currentLevel = parseInt(element.innerHTML);
    generateMap(currentLevel);
  });
});

// ↓↓ CSS Text Logic
buttonElement.addEventListener("click", () => {
  let css = textAreaElement.value;
  if (!css.includes("transform:")) {
    alert("Mauvaise Réponse");
  } else {
    player.style.cssText += css;
  }
});

// ↓↓ Gestion du texte ↓↓

// ↓↓ Collision Logic ↓↓
let playerCollidable = true;

function collided(joueur) {
  playerCollidable = false;
  joueur.classList.toggle("escape");
  setTimeout(() => {
    if (currentLevel < totalLevel) {
      alert("Good Job, You escaped level " + currentLevel + " !");
      currentLevel++;
      generateMap(currentLevel);
    }
  }, 2000);
}

function detectCollision(joueur, objectif) {
  let playerRect = joueur.getBoundingClientRect();
  let goalRect = objectif.getBoundingClientRect();
  console.log(joueur, objectif)

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
