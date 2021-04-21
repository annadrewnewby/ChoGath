import * as Engine from "../../../engine/engine.js"

export default  class EndSceneCountdownComponent extends Engine.Component {
  constructor(gameObject) {
    super(gameObject);
    this.tick = 0;
  }
  update(){
    this.tick++;
    if(this.tick > 100)
      this.gameObject.getComponent("SceneChangerComponent").next();
  }
}