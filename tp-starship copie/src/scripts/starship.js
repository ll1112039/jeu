import starshipImgSrc from '../assets/images/vaisseau-ballon-petit.png';
import Mobile from './mobile';
import mobile from './mobile';
import MoveState from './moveState';

export default class Starship extends mobile {
    constructor(x,y){
        super(x,y,starshipImgSrc,0,8);
        this.moving;
    }
    up(){
        if (this.moving===MoveState.UP) return true;
        else return false;
    }
    down(){
        if (this.moving===MoveState.DOWN) return true;
        else return false;
    }
    moveUp() {
        this.shiftY=(this.deltaY*-1);
        this.moving =MoveState.UP;
    }
    moveDown() {
        this.shiftY=this.deltaY;
        this.moving =MoveState.DOWN;
    }
    move(box) {              
        if (this.up()) {
            this._y = Math.max(0, this._y + this.shiftY);
        }
        if (this.down()) {
            this._y = Math.min(box.height - Mobile.MOBILE_LENGTH, this._y + this.shiftY);
        }
      }
    stopMoving() {
      this.moving = MoveState.NONE;
    }
}