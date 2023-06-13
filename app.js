const buttonElement = document.querySelector('button');
const textAreaElement = document.querySelector('#CSS-Prompt');
const player = document.querySelector('#Player');
const labyrinth = document.querySelector('#Labyrinthe');

buttonElement.addEventListener('click', () =>{
    let css = textAreaElement.value;
    if (!css.includes("transform:")){
        alert("Mauvaise Réponse");
    }else{
        if(css.includes('translateX(8rem)')){
            labyrinth.dataset.level = "2";
        }
        player.style.cssText = css;
    }
});
textAreaElement.addEventListener("keydown", (event) =>{
    if (event.key == 'Enter'){
        buttonElement.click()
    }
})