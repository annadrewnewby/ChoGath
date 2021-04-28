/*Import Component from "../component.js"

export default class WorldCameraComponent extends Component {
  constructor(gameObject, color) {
    super(gameObject);  
    this.screenWidth = 1;
    this.screenHeight =  1;
    this.color = color || "black";  
  }
}*/

import Component from "../component.js"

export default class WorldCameraComponent extends Component {
  constructor(gameObject, color) {
    super(gameObject);  
    this.color = color || "black";  
  }
}