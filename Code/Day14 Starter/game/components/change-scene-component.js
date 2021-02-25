import * as Engine from "/engine/engine.js"

class ChangeSceneComponent extends Engine.Component {
  static name = "ChangeSceneComponent";
  constructor(gameObject) {
    super(gameObject);
    this.ticks = 0;
  }
  update() {
    this.ticks++;
    if (this.ticks > 100) {
      if (Engine.SceneManager.currentScene.name == "FirstScene")
        Engine.SceneManager.changeScene("SecondScene");
      else Engine.SceneManager.changeScene("FirstScene")
    }
  }

}

export default ChangeSceneComponent;