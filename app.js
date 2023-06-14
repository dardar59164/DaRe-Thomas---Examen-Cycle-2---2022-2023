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
    currentLevel == 1
      ? leftArrow.classList.add("disabled")
      : leftArrow.classList.remove("disabled");
    currentLevel == totalLevel
      ? rightArrow.classList.add("disabled")
      : rightArrow.classList.remove("disabled");
    lvlActuel.innerHTML = currentLevel;
    generateMap(currentLevel);
  }
});
rightArrow.addEventListener("click", () => {
  if (currentLevel < 6) {
    currentLevel++;
    lvlActuel.innerHTML = currentLevel;
    currentLevel == 1
      ? leftArrow.classList.add("disabled")
      : leftArrow.classList.remove("disabled");
    currentLevel == totalLevel
      ? rightArrow.classList.add("disabled")
      : rightArrow.classList.remove("disabled");
    generateMap(currentLevel);
  }
});
niveaux.forEach((element) => {
  element.addEventListener("click", () => {
    parseInt(element.innerHTML) == 1
      ? leftArrow.classList.add("disabled")
      : leftArrow.classList.remove("disabled");
    parseInt(element.innerHTML) == 6
      ? rightArrow.classList.add("disabled")
      : rightArrow.classList.remove("disabled");
    generateMap(parseInt(element.innerHTML));
    lvlActuel.innerHTML = parseInt(element.innerHTML);
  });
});

// ↓↓ CSS Text Logic
buttonElement.addEventListener("click", () => {
  let css = textAreaElement.value;
  let player = document.querySelector("#Player");
  if (!css.includes("transform:")) {
    alert("Mauvaise Réponse");
  } else {
    player.style.cssText += css;
  }
});
// Game Logic
let playerCollidable = true;

function collided(joueur) {
  playerCollidable = false;
  joueur.classList.toggle("escape");
  setTimeout(() => {
    if(currentLevel < totalLevel){
      alert("Good Job, You escaped level "+currentLevel+" !");
      currentLevel++;
      generateMap(currentLevel);
    }
    lvlActuel.innerHTML = currentLevel;
  }, 2000);
}

function detectCollision(joueur, sortie) {
  let playerRect = joueur.getBoundingClientRect();
  let goalRect = sortie.getBoundingClientRect();

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
  let player = document.querySelector('#Player')
  let goal = document.querySelector('#Exit')
  detectCollision(player, goal);
  window.requestAnimationFrame(gameLoop);
}