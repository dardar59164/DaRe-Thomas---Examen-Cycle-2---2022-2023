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
function initGame(levelIndex) {
  let player = document.querySelector("#Player");
  let goal = document.querySelector("#Exit");
  let playerRect = player.getBoundingClientRect();
  let goalRect = goal.getBoundingClientRect();

  switch (levelIndex) {
    case 1:
      player.style.top = "4rem";
      player.style.right = "unset";
      player.style.bottom = "unset";
      player.style.left = "unset";
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
      player.style.left = "4rem";
      break;

    default:
      break;
  }
}

function generateMap(levelIndex) {
  switch (levelIndex) {
    // ↓↓ Première Map ↓↓
    case 1:
      playerCollidable = true;
      // ↓↓ Tiles Placement ↓↓
      labyrinth.innerHTML = `
      <div id="Playground-Wrap">
          <div id="Playground">
              <div id="Player"></div>
          </div>
      </div>`;
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

      // ↓↓ Gestion du texte ↓↓
      break;
    case 2:
      playerCollidable = true;
      // ↓↓ Tiles Placement ↓↓
      labyrinth.innerHTML = `
      <div id="Playground-Wrap">
          <div id="Playground">
              <div id="Player"></div>
          </div>
      </div>`;
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
      playerCollidable = true;
      // ↓↓ Tiles Placement ↓↓
      labyrinth.innerHTML = `
      <div id="Playground-Wrap">
          <div id="Playground">
              <div id="Player"></div>
          </div>
      </div>`;
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
      // ↓↓ Gestion du texte ↓↓
      break;
    // ↓↓ Quatrième Map ↓↓
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    case 999:
      break;
    default:
      break;
  }
}
