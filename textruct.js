const conf = {
    targetFPS: 60,
    targetTPS: 20,
    gameDisplayDimensions: [24, 80]
}
const renderBuffers = {
    world: [],
    entities: [],
    ui: []
}

function render(renderElement) {
    const screenBuffer = [];
    for (var line=0; line<renderBuffers.world.length; line++) {
        screenBuffer[line] = [...renderBuffers.world[line]];
        for (var char=0; char<renderBuffers.entities.length; char++) {
            if (renderBuffers.entities[line][char] !== '') {
                screenBuffer[line][char] = renderBuffers.entities[line][char];
            }
        }
        for (var char=0; char<renderBuffers.ui.length; char++) {
            if (renderBuffers.ui[line][char] !== '') {
                screenBuffer[line][char] = renderBuffers.ui[line][char];
            }
        }
    }
    console.log(screenBuffer); //debug
}

function tick(gameDisplayElement, world) {
    // Spellogik:
    
    
    // Visa resultatet, en gång per tick precis när den är färdig:
    return render(gameDisplayElement);
}

export function initGame(optioner) {
    
}

// Initialisera spelets kod så tidigt som möjligt
document.addEventListener('DOMContentLoaded', ()=>{
    const gameDisplayElement = document.querySelector('main');
    
    //setInterval(()=>{tick(gameDisplayElement, world)}, 1000/conf.targetTPS); // Simulationsloop
    //setInterval(render, 1000/conf.targetFPS); // Renderloop TODO: Gör om den med optionell väntetid i en traditionell loop för att tillåta lägre FPS när bilden inte kan rendras inom den efterfrågade tiden
}, {once:true});
