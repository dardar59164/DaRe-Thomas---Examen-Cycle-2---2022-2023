// function removeAllChildNodes(parent) {
//   while (parent.childElementCount > 1) {
//     parent.removeChild(parent.lastChild);
//   }
// }

// ↓↓ Création adaptative des différentes cases du plateau ↓↓
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
  // ↓↓ Réinitialisation de la position et des transformations du joueur ↓↓
  joueur.style.transform = "unset";
  joueur.style.top = "unset";
  joueur.style.right = "unset";
  joueur.style.bottom = "unset";
  joueur.style.left = "unset";
  joueur.classList.remove("escape");

  // ↓↓ Réinitialisation des transformations du plateau de jeu ↓↓
  plateau.style.transform = "unset";

  // ↓↓ Timer d'une seconde pour réactiver la collision du joueur ↓↓
  setTimeout(() => {
    playerCollidable = true;
  }, 1000);
}

// ↓↓ Mise à jour de l'indicateur de niveau ↓↓
function updateLevelTag() {
  currentLevel == 1
    ? leftArrow.classList.add("disabled")
    : leftArrow.classList.remove("disabled");
  currentLevel == totalLevel
    ? rightArrow.classList.add("disabled")
    : rightArrow.classList.remove("disabled");
  lvlActuel.forEach((element) => {
    element.innerHTML = currentLevel;
  });
}

//Initialisation du joueur / labyrinthe et gestion de l'éditeur de texte
function initGame(levelIndex) {
  let player = document.querySelector("#Player");
  let labyrinth = document.querySelector("#Labyrinthe");
  let goal = document.querySelector("#Exit");
  updateLevelTag();
  resetGame(player, labyrinth);

  switch (levelIndex) {
    // ↓↓ Initialisation de la map 1 ↓↓
    case 1:
      playerMockCSS.style.display = "block";
      labyMockCSS.style.display = "none";
      goalMockCSS.style.display = "none";
      player.style.top = "4rem";
      player.style.left = "0";
      break;
    // ↓↓ Initialisation de la map 2 ↓↓
    case 2:
      playerMockCSS.style.display = "block";
      labyMockCSS.style.display = "none";
      goalMockCSS.style.display = "none";
      player.style.top = "4rem";
      player.style.right = "0";
      break;
    // ↓↓ Initialisation de la map 3 ↓↓
    case 3:
      playerMockCSS.style.display = "block";
      labyMockCSS.style.display = "none";
      goalMockCSS.style.display = "none";
      player.style.left = "4rem";
      break;
    // ↓↓ Initialisation de la map 4 ↓↓
    case 4:
      playerMockCSS.style.display = "block";
      labyMockCSS.style.display = "none";
      goalMockCSS.style.display = "none";
      player.style.left = "4rem";
      player.style.top = "8rem";
      break;
    // ↓↓ Initialisation de la map 5 ↓↓
    case 5:
      playerMockCSS.style.display = "block";
      labyMockCSS.style.display = "none";
      goalMockCSS.style.display = "none";
      player.style.top = "8rem";
      break;
    // ↓↓ Initialisation de la map 6 ↓↓
    case 6:
      playerMockCSS.style.display = "none";
      labyMockCSS.style.display = "block";
      goalMockCSS.style.display = "none";
      player.style.top = "4rem";
      break;
    // ↓↓ Initialisation de la map 7 ↓↓
    case 7:
      playerMockCSS.style.display = "block";
      labyMockCSS.style.display = "none";
      goalMockCSS.style.display = "block";
      goal.style.transform = "scale(0)";
      break;
    // ↓↓ Initialisation de la map 8 ↓↓
    case 8:
      playerMockCSS.style.display = "none";
      labyMockCSS.style.display = "block";
      goalMockCSS.style.display = "none";
      player.style.top = "6rem";
      player.style.left = "5rem";
      break;
    default:
      break;
  }
}

// ↓↓ Génération des niveaux ↓↓
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
    // ↓↓ Sixième Map ↓↓
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
    // ↓↓ Septième Map ↓↓
    case 7:
      // ↓↓ Tiles Placement ↓↓
      labyrinth.innerHTML = ``;
      count = 0;
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (i == 8 && j == 8) {
            labyrinth.appendChild(createTile(null, "Exit"));
          } else {
            j > count - 1
              ? labyrinth.appendChild(createTile("path"))
              : labyrinth.appendChild(createTile("wall"));
          }
        }
        count++;
      }
      initGame(levelIndex);
      break;
    // ↓↓ Huitième Map ↓↓
    case 8:
      // ↓↓ Tiles Placement ↓↓
      labyrinth.innerHTML = ``;
      count = 8;
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (i == 0 && j == 8) {
            labyrinth.appendChild(createTile(null, "Exit"));
          } else {
            j < count
              ? labyrinth.appendChild(createTile("wall"))
              : labyrinth.appendChild(createTile("path"));
          }
        }
        count--;
      }
      initGame(levelIndex);
      break;
    default:
      break;
  }
}
