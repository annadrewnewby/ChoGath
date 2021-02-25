import * as Engine from "/engine/engine.js"

export default  class MoleMakerComponent extends Engine.Component {
  constructor(gameObject) {
    super(gameObject);
    this.tick = 0;
    this.lanes = [{direction:1, coolDown:0}, {direction:-1, coolDown:100}, {direction:-1, coolDown:50}]
    this.coolDownRestart = 400;
  }
  update() {
    let score = this.gameObject.getComponent("ScoreComponent").score++;
    let screenTextComponent = this.gameObject.getComponent("ScreenTextComponent");
    screenTextComponent.string = score;

    for(let i = 0; i < this.lanes.length; i++){
      let lane = this.lanes[i];
      lane.coolDown--;
      if(lane.coolDown <= 0){
        lane.coolDown = this.coolDownRestart;
        Engine.SceneManager.currentScene.instantiate({
          prefabName:"Car",
          x:0,y:i*100+180
        })
      }
    }

    

  }

}