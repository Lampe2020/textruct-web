const conf = {
    targetTPS: 20,
    gameDisplayDimensions: [24, 80]
}
const renderBuffers = {
    world: [],
    entities: [],
    ui: []
}

var varldlista = JSON.parse(localStorage.varldar);

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

export function initMenu(menuelement) {
    if (Object.keys(varldlista).length) {
        const ingavarldar = menuelement.querySelector('#ingavarldar') || document.createElement('option');
        ingavarldar.hidden = true;
        ingavarldar.selected = false;
        const varldvaljare = menuelement.querySelector('select[name=world]');
        try {
            for (const varldid of Object.keys(varldlista)) {
                const varld = varldlista[varldid];
                const varldoption = document.createElement('option');
                varldoption.label = varld.namn || 'Onämnd värld';
                varldoption.innerText = varldid || '<unknown>';
                varldvaljare.appendChild(varldoption);
                if (varldvaljare.value==='') {
                    varldvaljare.value = varldid;
                    varldvaljare.dispatchEvent(new InputEvent('input'));
                }
            }
        } catch(err) {
            ingavarldar.hidden = false;
            ingavarldar.selected = true;
            console.error(err);
        }
    } else {
        console.log('Inga världar hittades!');
    }
}

// Initialisera spelets kod så tidigt som möjligt
document.addEventListener('DOMContentLoaded', ()=>{
    // Göra nånting här alls?
}, {once:true});
