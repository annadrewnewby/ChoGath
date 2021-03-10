import * as Engine from "../../../engine/engine.js"

// export default  class KeyboardMoveComponent extends Engine.Component {
//   constructor(gameObject, speed = 1) {
//     super(gameObject);
//     this.speed = 5;
//   }
//   onKeyDown(keys){
//     let originalPosition = new Engine.Vector2(this.gameObject.x, this.gameObject.y);
//     // if(keys["a"] || keys["ArrowLeft"]) this.gameObject.x -= 1 * this.speed
//     // if(keys["d"] || keys["ArrowRight"]) this.gameObject.x += 1 * this.speed
//     // if(keys["w"] || keys["ArrowUp"]) this.gameObject.y -= 1 * this.speed
//     // if(keys["s"] || keys["ArrowDown"]) this.gameObject.y += 1 * this.speed
//     if (Engine.Input.getKey("ArrowLeft") || Engine.Input.getKey('a')) this.gameObject.transform.x -= 1 * this.speed;
//     if (Engine.Input.getKey("ArrowRight") || Engine.Input.getKey('d')) this.gameObject.transform.x += 1 * this.speed;
//     if (Engine.Input.getKey("ArrowUp") || Engine.Input.getKey('w')) this.gameObject.transform.y -= 1 * this.speed;
//     if (Engine.Input.getKey("ArrowDown") || Engine.Input.getKey('s')) this.gameObject.transform.y += 1 * this.speed;
//     if(this.gameObject.x < 0 
//       || this.gameObject.x > 600 
//       || this.gameObject.y <0 
//       || this.gameObject.y > 525){
//       //We are out of bounds, so revert back
//       this.gameObject.x = originalPosition.x;
//       this.gameObject.y = originalPosition.y;
//     }

//   }

// }
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