import * as Engine from "../../../engine/engine.js"

export default  class KeyboardBumpComponent extends Engine.Component {
  constructor(gameObject, speed = 1) {
    super(gameObject);
    this.speed = speed;
  }
  onKeyDown(keys){
    let originalPosition = new Engine.Vector2(this.gameObject.x, this.gameObject.y);
    if(keys["a"] || keys["ArrowLeft"]) this.gameObject.x -= 1 * this.speed
    if(keys["d"] || keys["ArrowRight"]) this.gameObject.x += 1 * this.speed
    if(keys["w"] || keys["ArrowUp"]) this.gameObject.y -= 1 * this.speed
    if(keys["s"] || keys["ArrowDown"]) this.gameObject.y += 1 * this.speed
    if(this.gameObject.x < 0 
      || this.gameObject.x > 600 
      || this.gameObject.y <0 
      || this.gameObject.y > 525){
      //We are out of bounds, so revert back
      this.gameObject.x = originalPosition.x;
      this.gameObject.y = originalPosition.y;
    }

  }

}