import saucerImgSrc from '../assets/images/flyingSaucer-petit.png';
import Mobile from './mobile';
import theGame from './game';

export default class Saucer extends Mobile{
    static saucer_WIDTH= 48;
    static saucer_HEIGHT=36
    constructor(x,y){
        super(x,y,saucerImgSrc,-3,0);
    };
    move(canvas) {
        if((this._x+this.deltaX)<=0){
            theGame.addScore(-1000);
            theGame.ovnis = theGame.ovnis.filter(k => !(k.x+k.deltaX <=0));
        }
        else this._x+= this.deltaX;

        if((this._y+this.deltaY+Saucer.saucer_HEIGHT)>canvas.height){
            theGame.ovnis = theGame.ovnis.filter(k => !((k._y+k.deltaY+Saucer.saucer_HEIGHT)>canvas.height));
        }
        else this._y+= this.deltaY;
    }
    createImage() {
        const mobileImg = new Image();
        mobileImg.src = saucerImgSrc;
        mobileImg.width=Saucer.saucer_WIDTH;
        mobileImg.height=Saucer.saucer_HEIGHT;
        return mobileImg;
      }
}