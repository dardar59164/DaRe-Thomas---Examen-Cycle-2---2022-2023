const buttonElement = document.querySelector('button');
const textAreaElement = document.querySelector('#CSS-Prompt');
const player = document.querySelector('#Player');
const goal = document.querySelector('.exit');

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