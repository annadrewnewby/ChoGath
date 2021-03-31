import * as Engine from "../../../engine/engine.js"

export default  class SceneChangerComponent extends Engine.Component {
  constructor(gameObject) {
    super(gameObject);
  }
  next(){
    let currentSceneName = Engine.SceneManager.currentScene.name;
    if(currentSceneName == "TitleScene") 
    {
      Engine.SceneManager.changeScene("MainScene");
    }
    else if (currentSceneName == "MainScene")
    {
      Engine.SceneManager.changeScene("EndScene")
    }
    else 
    {
      Engine.SceneManager.changeScene("TitleScene")
    }
  }
}