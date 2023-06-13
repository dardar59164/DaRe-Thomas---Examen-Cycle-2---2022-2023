// ↓↓ CSS Related Objects↓↓
const buttonElement = document.querySelector('button');
const textAreaElement = document.querySelector('#CSS-Prompt');

// ↓↓ Level Selection Objets ↓↓
const lvlActuel = document.querySelector('span.actuel');
const lvlSelector = document.querySelector('#Indication-Niveaux');  
const lvlTooltip = document.querySelector('#Tooltip-Niveaux');
const leftArrow = document.querySelector('.arrow#Left');
const rightArrow = document.querySelector('.arrow#Right');

// ↓↓ Game Objects ↓↓
const labyrinth = document.querySelector('#Labyrinthe');
const player = document.querySelector('#Player');
const goal = document.querySelector('.exit');

// ↓↓ Level Selection ↓↓
let currentLevel = parseInt(labyrinth.dataset.level)

window.onload = () => {
    lvlActuel.innerHTML = labyrinth.dataset.level;
};

leftArrow.addEventListener('click', ()=>{
    if (currentLevel > 1){
        currentLevel--;
        labyrinth.dataset.level = currentLevel.toString()
        lvlActuel.innerHTML = labyrinth.dataset.level;
    }
})
rightArrow.addEventListener('click', ()=>{
    if (currentLevel < 6){
        currentLevel++;
        labyrinth.dataset.level = currentLevel.toString()
        lvlActuel.innerHTML = labyrinth.dataset.level;
    }
})
// ↓↓ CSS Text Logic
buttonElement.addEventListener('click', () =>{
    let css = textAreaElement.value;
    if (!css.includes("transform:")){
        alert("Mauvaise Réponse");
    }else{
        player.style.cssText = css;
    }
});
textAreaElement.addEventListener("keydown", (event) =>{
    if (event.key == 'Enter'){
        event.preventDefault();
        buttonElement.click();
    }
})

// Game Logic
let playerCollidable = true;

function collided() {
    playerCollidable = false;
    player.classList.toggle('escape');
    setTimeout(() => {
        alert("Good Job, You escaped level 1 !")
    }, 2000);
}

function detectCollision() {
    let playerRect = player.getBoundingClientRect();
    let goalRect = goal.getBoundingClientRect();
    
    if (playerCollidable && 
        playerRect.left < goalRect.left + goalRect.width &&
        playerRect.left + playerRect.width > goalRect.left &&
        playerRect.top < goalRect.top + goalRect.height &&
        playerRect.height + playerRect.top > goalRect.top) {
        collided();
    }
}

window.requestAnimationFrame(gameLoop);

function gameLoop() {
    detectCollision();
    window.requestAnimationFrame(gameLoop);
}