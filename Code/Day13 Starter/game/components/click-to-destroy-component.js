import Component from "../../engine/component.js"
import Input from "../../engine/input.js"
import SceneManager from "../../engine/scene-manager.js";

class ClickToDestroyComponent extends Component {
  // static name = "ClickToDestroyComponent";
  // constructor(gameObject, speed = 1) {
  //   super(gameObject);
  //   this.speed = speed;

  // }
  // start(){
  //   console.log("You called start() on a ClickToDestroyComponent")
  // }
  // update() {
  //   if(Input.getMouseButtonDown(0)){
  //     let mousePosition = Input.getMousePosition();
  //     if(mousePosition.x < 100 && mousePosition.y < 200){
  //       this.gameObject.destroy();
  //       let mainController = SceneManager.currentScene.getGameObject("MainController");
  //       let scoreComponent = mainController.getComponent("ScoreComponent");
  //       scoreComponent.score++;
  //     }
  //   }
  // }

}

export default ClickToDestroyComponent;