import * as Engine from "../../../engine/engine.js"

export default  class KeyboardMoveComponent extends Engine.Component {
  constructor(gameObject, speed = 1) {
    super(gameObject);
    this.speed = 5;

  }
  update() {
    //let originalPosition = new Engine.Vector2(this.gameObject.x, this.gameObject.y);
    if (Engine.Input.getKey("ArrowLeft") || Engine.Input.getKey('a')) this.gameObject.x -= 1 * this.speed;
    if (Engine.Input.getKey("ArrowRight") || Engine.Input.getKey('d')) this.gameObject.x += 1 * this.speed;
    if (Engine.Input.getKey("ArrowUp") || Engine.Input.getKey('w')) this.gameObject.y -= 1 * this.speed;
    if (Engine.Input.getKey("ArrowDown") || Engine.Input.getKey('s')) this.gameObject.y += 1 * this.speed;
    /*if(this.gameObject.x < 0 
      || this.gameObject.x > 600 
      || this.gameObject.y <0 
      || this.gameObject.y > 525){
      //We are out of bounds, so revert back
      this.gameObject.x = originalPosition.x;
      this.gameObject.y = originalPosition.y;*/
  }

}