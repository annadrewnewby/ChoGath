import Vector2 from "./vector-2.js"

class Input{
  static keys = [];
  static keysDown = [];
  static keysUp = [];
  static frameKeysDown = [];
  static frameKeysUp = [];
 
  static mouseButtons = [];
  static mouseButtonsDown = [];
  static mouseButtonsUp = [];
  static frameMouseButtonsDown = [];
  static frameMouseButtonUp = [];
 
  static mousePosition = new Vector2();
  static frameMousePosition;
  static lastFrameMousePosition;

  static scrollWheel = 0;
  static frameScrollWheel = 0;

  static SwapArrays(){
    this.frameKeysDown = this.keysDown;
    this.frameKeysUp = this.keysUp;
    this.keysDown = [];
    this.keysUp = [];

    this.frameMouseButtonsDown = this.mouseButtonsDown;
    this.frameMouseButtonsUp = this.mouseButtonsUp;
    this.mouseButtonsDown = [];
    this.mouseButtonsUp = [];

    this.lastFrameMousePosition = this.frameMousePosition
    this.frameMousePosition = new Vector2(mousePosition);
  }

  static getKey(key){
    return this.keys[key];
  }
  static keyDown(key){
    return this.frameKeysDown[key];
  }
  static keyUp(key){
    return this.frameKeysUp[key];
  }
  
  static getMouseButton(button){
    return this.mouseButton[button];
  }
  static getMouseButtonDown(button){
    return this.frameKeysDown(button);
  }
  static getMouseButtonUp(button){
    return this.frameMouseButtonUp[button];
  }

  static getScrollWheel(){
    return this.frameScrollWheel;
  }

  static getMousePosition(){
    return this.frameMousePosition;
  }
  static getMousePositionDelta(){
    return Vector2.subtract(this.frameMousePosition,this.lastFrameMousePosition);
  }




}

export default Input;