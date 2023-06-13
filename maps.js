// ↓↓ Génération de Map ↓↓
const labyrinth = document.querySelector('#Labyrinthe');

function createTile(className) {
    let div = document.createElement('div');
    div.classList.add(className)
    return div;
}
// ↓↓ Première Map ↓↓
if (labyrinth.dataset.level == "1"){
    for (let i = 0; i < 36; i++) {      
        labyrinth.appendChild(createTile('wall'));
    }
    for (let i = 0; i < 9; i++) {
        if (i == 8){
            labyrinth.appendChild(createTile('exit'));
        }else{
            labyrinth.appendChild(createTile('path'));
        }
    }
    for (let i = 0; i < 36; i++) {      
        labyrinth.appendChild(createTile('wall'));
    }
}

// ↓↓ Seconde Map ↓↓
