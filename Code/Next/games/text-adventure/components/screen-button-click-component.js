import * as Engine from "/engine/engine.js"

export default class ScreenButtonClickComponent extends Engine.Component {
  constructor(gameObject, args) {
    super(gameObject);
    if (!gameObject) return;
    this.method = args.method;
    this.args = args.args;
  }
  start() {
    this.rectangleComponent = this.gameObject.getComponent("RectangleGeometryComponent");
  }
  onMouseButtonDown(event) {
    let loc = event.location;
    let x = this.gameObject.transform.position.x;
    let y = this.gameObject.transform.position.y;
    let w = this.rectangleComponent.width;
    let h = this.rectangleComponent.height;

    if (loc.x > x - w / 2 && loc.x < x + w / 2 && loc.y > y - h / 2 && loc.y < y + h / 2){
      console.log("Mouse down");
      let path = this.method.split(".");
      let gameObject = Engine.SceneManager.getGameObject(path[0])
      let component = gameObject.getComponent(path[1]);
      component[path[2]](this.args)
    }


  }

}