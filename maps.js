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
function resetPlayer(joueur) {
  joueur.style.transform = "unset";
  joueur.classList.remove("escape");
  playerCollidable = true;
}
function updateLevelTag() {
  currentLevel == 1
    ? leftArrow.classList.add("disabled")
    : leftArrow.classList.remove("disabled");
  currentLevel == totalLevel
    ? rightArrow.classList.add("disabled")
    : rightArrow.classList.remove("disabled");
  lvlActuel.innerHTML = currentLevel;
}
function initGame(levelIndex) {
  let player = document.querySelector("#Player");
  updateLevelTag();
  resetPlayer(player);

  switch (levelIndex) {
    case 1:
      player.style.top = "4rem";
      player.style.right = "unset";
      player.style.bottom = "unset";
      player.style.left = "-1rem";
      break;

    case 2:
      player.style.top = "4rem";
      player.style.right = "0";
      player.style.bottom = "unset";
      player.style.left = "unset";
      break;

    case 3:
      player.style.top = "unset";
      player.style.right = "unset";
      player.style.bottom = "unset";
      player.style.left = "3rem";
      break;

    case 4:
      player.style.top = "8rem";
      player.style.right = "unset";
      player.style.bottom = "unset";
      player.style.left = "-1rem";
      break;

    case 5:
      player.style.top = "8rem";
      player.style.right = "unset";
      player.style.bottom = "unset";
      player.style.left = "unset";
      break;

    case 6:
      player.style.top = "unset";
      player.style.right = "unset";
      player.style.bottom = "unset";
      player.style.left = "unset";
      break;

    default:
      break;
  }
}

function generateMap(levelIndex) {
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
      let count = 9;
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (i == 0 && j == 8){
            labyrinth.appendChild(createTile(null, "Exit"))
          } else {
            j < count ? labyrinth.appendChild(createTile("path")) : labyrinth.appendChild(createTile("wall"));
          }
        }
        count--;
      }
      initGame(levelIndex);
      break;
    case 5:
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
    case 6:
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
    case 999:
      break;
    default:
      break;
  }
}
