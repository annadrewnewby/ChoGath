import Component from "../component.js"
export default class DrawGeometryComponent extends Component {
  constructor(gameObject, color) {
    super(gameObject);
    this.color = color;
  }
  draw(ctx) {
    let rectangleGeometry = this.gameObject.getComponent("RectangleGeometryComponent")
    let circleGeometry = this.gameObject.getComponent("CircleGeometryComponent")
    ctx.fillStyle = this.color;
    if (rectangleGeometry) {
      ctx.fillRect(- rectangleGeometry.width/2, - rectangleGeometry.height/2, rectangleGeometry.width, rectangleGeometry.height);
    }
    if(circleGeometry){
     ctx.beginPath();
     ctx.arc(0, 0, circleGeometry.radius, 0, Math.PI * 2);
     ctx.fill(); 
    }

  }
}