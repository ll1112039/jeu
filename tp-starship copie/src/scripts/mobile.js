
export default class Mobile {
    static MOBILE_LENGTH = 39;
    constructor(x,y,image,deltaX=0,deltaY=0){
        this._x=x;
        this._y=y;
        this.deltaX=deltaX;
        this.deltaY=deltaY;
        this.image=this.createImage(image);
    }
    get x() {
        return this._x;
      }
  
    get y() {
        return this._y;
      } 


    draw(context) {
        context.drawImage(this.image,this._x,this._y);
    }

    move() {
        this._x=this._x+this.deltaX;
        this._y=this._y+this.deltaY;

    }
    createImage(image) {
        const mobileImg = new Image();
        mobileImg.src = image;
        mobileImg.width=Mobile.MOBILE_LENGTH;
        return mobileImg;
      }




}