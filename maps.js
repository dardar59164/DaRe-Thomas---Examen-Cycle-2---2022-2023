// ↓↓ Génération de Map ↓↓
function removeAllChildNodes(parent) {
  while (parent.childElementCount > 1) {
    parent.removeChild(parent.lastChild);
  }
}
function createTile(className, id) {
  let div = document.createElement("div");
  if (className == null) {
    div.setAttribute("id", id);
  } else if (id == null) {
    div.classList.add(className);
  }
  return div;
}
function resetGame(joueur, plateau) {
  joueur.style.transform = "unset";
  joueur.style.top = "unset";
  joueur.style.right = "unset";
  joueur.style.bottom = "unset";
  joueur.style.left = "unset";
  joueur.classList.remove("escape");
  playerCollidable = true;
  plateau.style.transform = "unset";
}
function updateLevelTag() {
  currentLevel == 1
    ? leftArrow.classList.add("disabled")
    : leftArrow.classList.remove("disabled");
  currentLevel == totalLevel
    ? rightArrow.classList.add("disabled")
    : rightArrow.classList.remove("disabled");
    lvlActuel.forEach(element => {
      element.innerHTML = currentLevel;
    });
}
function initGame(levelIndex) {
  let player = document.querySelector("#Player");
  let labyrinth = document.querySelector("#Labyrinthe");
  let playerMockHTML = document.querySelector("#playerMockHTML");
  let labyMockHTML = document.querySelector("#labyMockHTML");
  updateLevelTag();
  resetGame(player, labyrinth);

  switch (levelIndex) {
    case 1:
      playerMockHTML.style.display = "block";
      labyMockHTML.style.display = "none";
      player.style.top = "4rem";
      player.style.left = "0";
      break;

    case 2:
      playerMockHTML.style.display = "block";
      labyMockHTML.style.display = "none";
      player.style.top = "4rem";
      player.style.right = "0";
      break;

    case 3:
      playerMockHTML.style.display = "block";
      labyMockHTML.style.display = "none";
      player.style.left = "4rem";
      break;

    case 4:
      playerMockHTML.style.display = "block";
      labyMockHTML.style.display = "none";
      player.style.left = "4rem";
      player.style.top = "8rem";
      break;

    case 5:
      playerMockHTML.style.display = "block";
      labyMockHTML.style.display = "none";
      player.style.top = "8rem";
      break;

    case 6:
      playerMockHTML.style.display = "none";
      labyMockHTML.style.display = "block";
      player.style.top = "4rem";
      break;

    default:
      break;
  }
}

function generateMap(levelIndex) {
  let count = 0;
  switch (levelIndex) {
    // ↓↓ Première Map ↓↓
    case 1:
      // ↓↓ Tiles Placement ↓↓
      labyrinth.innerHTML = ``;
      for (let i = 0; i < 36; i++) {
        labyrinth.appendChild(createTile("wall"));
      }
      for (let i = 0; i < 9; i++) {
        i == 8
          ? labyrinth.appendChild(createTile(null, "Exit"))
          : labyrinth.appendChild(createTile("path"));
      }
      for (let i = 0; i < 36; i++) {
        labyrinth.appendChild(createTile("wall"));
      }

      initGame(levelIndex);

      break;
    // ↓↓ Deuxième Map ↓↓
    case 2:
      // ↓↓ Tiles Placement ↓↓
      labyrinth.innerHTML = ``;
      for (let i = 0; i < 36; i++) {
        labyrinth.appendChild(createTile("wall"));
      }
      for (let i = 0; i < 9; i++) {
        i == 0
          ? labyrinth.appendChild(createTile(null, "Exit"))
          : labyrinth.appendChild(createTile("path"));
      }
      for (let i = 0; i < 36; i++) {
        labyrinth.appendChild(createTile("wall"));
      }

      initGame(levelIndex);

      // ↓↓ Gestion du texte ↓↓
      break;
    // ↓↓ Troisième Map ↓↓
    case 3:
      // ↓↓ Tiles Placement ↓↓
      labyrinth.innerHTML = ``;
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (j == 4) {
            i == 8
              ? labyrinth.appendChild(createTile(null, "Exit"))
              : labyrinth.appendChild(createTile("path"));
          } else {
            labyrinth.appendChild(createTile("wall"));
          }
        }
      }
      initGame(levelIndex);
      break;
    // ↓↓ Quatrième Map ↓↓
    case 4:
      // ↓↓ Tiles Placement ↓↓
      labyrinth.innerHTML = ``;
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (j == 4) {
            i == 0
              ? labyrinth.appendChild(createTile(null, "Exit"))
              : labyrinth.appendChild(createTile("path"));
          } else {
            labyrinth.appendChild(createTile("wall"));
          }
        }
      }
      initGame(levelIndex);
      break;
    // ↓↓ Cinquième Map ↓↓
    case 5:
      // ↓↓ Tiles Placement ↓↓
      labyrinth.innerHTML = ``;
      count = 9;
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (i == 0 && j == 8) {
            labyrinth.appendChild(createTile(null, "Exit"));
          } else {
            j < count
              ? labyrinth.appendChild(createTile("path"))
              : labyrinth.appendChild(createTile("wall"));
          }
        }
        count--;
      }
      initGame(levelIndex);
      break;
    // ↓↓ Cinquième Map ↓↓
    case 6:
      // ↓↓ Tiles Placement ↓↓
      labyrinth.innerHTML = ``;
      for (let i = 0; i < 36; i++) {
        labyrinth.appendChild(createTile("wall"));
      }
      for (let i = 0; i < 9; i++) {
        i == 8
          ? labyrinth.appendChild(createTile(null, "Exit"))
          : labyrinth.appendChild(createTile("path"));
      }
      for (let i = 0; i < 36; i++) {
        labyrinth.appendChild(createTile("wall"));
      }

      initGame(levelIndex);
      break;
    case 999:
      break;
    default:
      break;
  }
}
