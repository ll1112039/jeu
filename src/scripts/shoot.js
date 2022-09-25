import shootImgSrc from '../assets/images/tir.png';
import mobile from './mobile';
import theGame from './game';
import Saucer from './saucer';

export default class Shoot extends mobile {
    static Shoot_LENGTH=32;
    static Shoot_HEIGHT=8;
    constructor(starship){
        super(starship.x+39,starship.y+12,shootImgSrc,8,0);
    }


    collision(obstacle){
        const P1Abs=Math.max(this.x,obstacle.x);
        const P1Ord=Math.max(this.y,obstacle.y);
        const P2Abs=Math.min((this.x+Shoot.Shoot_LENGTH),(obstacle.x+Saucer.saucer_WIDTH));
        const P2Ord=Math.min((this.y+Shoot.Shoot_HEIGHT),(obstacle.y+Saucer.saucer_HEIGHT));
        return(P1Abs < P2Abs && P1Ord < P2Ord);
    }
    move(canvas){
        if((this._x+this.deltaX)>canvas.width){
            theGame.shoots = theGame.shoots.filter(k => !(k.x+k.deltaX >canvas.width));
        }
        else this._x+= this.deltaX;
    }

    touch(SaucerArmy){
        const k = SaucerArmy.filter( z => z.deltaY===0).filter(t => this.collision(t));
        k.forEach(z => z.deltaX=0);
        k.forEach(z => z.deltaY=3);
        theGame.addScore(k.length*200);
        if (k.length>0){
        theGame.shoots=theGame.shoots.filter(t => !(t.collision(k[0])));
        }
    }

}