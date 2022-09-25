import Starship from './starship';
import Saucer from './saucer';
import Mobile from './mobile';
import Shoot from './shoot';

class Game {
    constructor(){
        this.canvas= document.getElementById("stars");
        this.context=this.canvas.getContext('2d');
        this.starship=new Starship(40,(this.canvas.height/2));
        this.ovnis=[];
        this.shoots=[];
        this.score=0;
        this.inva;
    }
    moveAndDraw(){
        this.starship.move(this.canvas);
        this.shoots.forEach(shoot => shoot.touch(this.ovnis));
        this.ovnis.forEach(ovni => ovni.move(this.canvas));
        this.shoots.forEach(shoot => shoot.move(this.canvas));
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.starship.draw(this.context);
        this.ovnis.forEach(ovni => ovni.draw(this.context));
        this.shoots.forEach(shoot => shoot.draw(this.context));
        window.requestAnimationFrame(this.moveAndDraw.bind(this))
    }
    keyUpActionHandler(event) {
        switch (event.key) {
            case "ArrowUp":
            case "Up":
            case "ArrowDown":
            case "Down":
                this.starship.stopMoving();
                break;
            default: return;
        }
        event.preventDefault();
    }

    keyDownActionHandler(event) {
        switch (event.key) {
            case "ArrowUp":
            case "Up":
                this.starship.moveUp();
                break;
            case "ArrowDown":
            case "Down":
                this.starship.moveDown();
                break;
            case " ":
                this.addShoot();
                break;
            default: return;
        }
        event.preventDefault();
     }

    alea(m,n){
        return Math.floor(Math.random() * (n - m) + m);
    }
    addSaucer(){
        this.ovnis.push(new Saucer(this.canvas.width-Mobile.MOBILE_LENGTH,this.alea(0,this.canvas.height-Mobile.MOBILE_LENGTH)));
    }
    addShoot(){
        this.shoots.push(new Shoot(this.starship));
    }
    Armada(){
           this.inva=window.setInterval(this.maybeSaucer.bind(this),750);
    }
    maybeSaucer(){
        const x = Math.floor(Math.random() *2);
        console.log(x);
        if (x===0){
            this.addSaucer();
        }
    }


    stopAndStartInvasion(){
        if(this.inva!=null){
            window.clearInterval(this.inva);
            this.inva=null;
        }
        else this.Armada();
    }
 
    addScore(x){
        const z = document.getElementById("score").innerHTML;
        if(parseInt(z)+x>0){
            document.getElementById("score").innerHTML=parseInt(z)+x;
            this.score=parseInt(z)+x;
        }
        else document.getElementById("score").innerHTML=0;
        
        
        
    }

}




// crée et exporte l'instance unique de Game
const theGame = new Game();
export default theGame;
