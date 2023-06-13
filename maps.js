// ↓↓ Génération de Map ↓↓
function createTile(className) {
    let div = document.createElement('div');
    div.classList.add(className)
    return div;
}

// ↓↓ Première Map ↓↓
if (labyrinth.dataset.level == "1"){

    // ↓↓ Player Placement ↓↓
    player.style.top = "4rem";

    // ↓↓ Tiles Placement ↓↓
    let tileCount = 0;
    for (let i = 0; i < 36; i++) {    
        tileCount++;  
        labyrinth.appendChild(createTile('wall'));
    }
    for (let i = 0; i < 9; i++) {
        tileCount++;  
        if (i == 8){
            labyrinth.appendChild(createTile('exit'));
        }else{
            labyrinth.appendChild(createTile('path'));
        }
    }
    for (let i = 0; i < 36; i++) {   
        tileCount++;     
        labyrinth.appendChild(createTile('wall'));
    }

    // ↓↓ Gestion du texte ↓↓
}

// ↓↓ Seconde Map ↓↓
if (labyrinth.dataset.level == "2"){

    // ↓↓ Player Placement ↓↓
    player.style.left = "4rem";

    // ↓↓ Tiles Placement ↓↓
    let tileCount = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            tileCount++;
            if (tileCount == 77){
                labyrinth.appendChild(createTile('exit'));
            } else if (j == 4){
                labyrinth.appendChild(createTile('path'));
            } else {
                labyrinth.appendChild(createTile('wall'));
            }
        }
    }
    // ↓↓ Gestion du texte ↓↓

}

// ↓↓ Troisième Map ↓↓
