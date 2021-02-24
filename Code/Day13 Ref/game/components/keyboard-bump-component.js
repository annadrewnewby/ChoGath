import Component from "../../engine/component.js"
import Input from "../../engine/input.js"

class KeyboardBumpComponent extends Component {
  static name = "KeyboardBumpComponent";
  constructor(gameObject, speed = 1) {
    super(gameObject);
    this.speed = speed;

  }
  update() {
    // if (Input.getKey("ArrowLeft") || Input.getKey('a')) this.gameObject.x -= 1 * this.speed;
    // if (Input.getKey("ArrowRight") || Input.getKey('d')) this.gameObject.x += 1 * this.speed;
    // if (Input.getKey("ArrowUp") || Input.getKey('w')) this.gameObject.y -= 1 * this.speed;
    // if (Input.getKey("ArrowDown") || Input.getKey('s')) this.gameObject.y += 1 * this.speed;
  }
  onKeyDown(keys){
    if(keys["a"] || keys["ArrowLeft"]) this.gameObject.x -= 1 * this.speed
    if(keys["d"] || keys["ArrowRight"]) this.gameObject.x += 1 * this.speed
    if(keys["w"] || keys["ArrowUp"]) this.gameObject.y -= 1 * this.speed
    if(keys["s"] || keys["ArrowDown"]) this.gameObject.y += 1 * this.speed
  }

}

export default KeyboardBumpComponent;