import * as Engine from "/engine/engine.js"

export default class ScreenButtonClickComponent extends Engine.Component {
  constructor(gameObject) {
    super(gameObject);
  }
  start() {
    this.rectangleComponent = this.gameObject.getComponent("RectangleGeometryComponent");
  }
  onMouseButtonDown(event) {
    let loc = event.location;
    let x = this.gameObject.x;
    let y = this.gameObject.y;
    let w = this.rectangleComponent.width;
    let h = this.rectangleComponent.height;

    if (loc.x > x - w / 2 && loc.x < x + w / 2 && loc.y > y - h / 2 && loc.y < y + h / 2)
    console.log("Mouse down");


  }

}