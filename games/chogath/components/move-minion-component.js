import * as Engine from "../../../engine/engine.js"
import chogath from "../prefabs/chogath.js"

export default  class MoveMinionComponent extends Engine.Component{
    constructor(gameObject){
        super(gameObject);
    }


    update(){
        this.gameObject.x++; 
        //this.gameObject.transform.x++; 
        if(this.gameObject.x < 0 
            || this.gameObject.x > 630 
            || this.gameObject.y <0 
            || this.gameObject.y > 650){
                this.gameObject.destroy();
        }
       
        let rectangle = Engine.SceneManager.currentScene.getGameObject("chogath");
        let point = this.gameObject.x;
        if (Engine.EngineGeometry.Collisions.collision(point, rectangle.getComponent("RectangleGeometryComponent").asGeometry())) {
            this.gameObject.destroy();
            Engine.SceneManager.currentScene.getGameObject("MainController").getComponent("HitsComponent").hits++;
        }
    }
}