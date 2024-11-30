// Initialisera spelets kod så tidigt som möjligt
document.addEventListener('DOMContentLoaded', ()(=>{
    const gameDisplayElement = document.querySelector('main');
    const gameDisplayDimensions = [0,0];
    const buffers = {
        world: [],
        entities: [],
        ui: []
    }

    function render() {
        const screenBuffer = [];
        for (var line=0; line<buffers.world.length; line++) {
            screenBuffer[line] = [...buffers.world[line]];
        }
        console.log(screenBuffer); //debug
    }

}, {once:true});
