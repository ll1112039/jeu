
// importation de l'instance de Game créée dans Game.js
import  theGame  from './game.js';

// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler le starship
const init = () => {
    theGame.moveAndDraw();
    document.getElementById("nouvelleSoucoupe").addEventListener("click", () => theGame.addSaucer());
    document.getElementById("nouvelleSoucoupe").addEventListener("click", () => document.activeElement.blur());
    console.log(document.getElementById("score"));
    window.addEventListener('keydown', theGame.keyDownActionHandler.bind(theGame));
    window.addEventListener('keyup', theGame.keyUpActionHandler.bind(theGame));
    document.getElementById("flotteSoucoupes").addEventListener("click", () => theGame.stopAndStartInvasion());


}

window.addEventListener("load",init);

//
console.log('le bundle a été généré');
