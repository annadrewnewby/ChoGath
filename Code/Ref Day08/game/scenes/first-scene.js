import Scene from "../../engine/scene.js"
import GameObject from "../../engine/game-object.js"
import RedDef from "../prefabs/red-rectangle-def.js"
import BlueDef from "../prefabs/blue-rectangle-def.js"
import DrawComponent from "../components/draw-component.js"
import MoveComponent from "../components/move-component.js"

/**
 * @class FirstScene the first scene in our game
 */
class FirstScene extends Scene{
    /**
     * Call the super constructor and then initialize any local data
     */
    constructor() {
        super();

       

        // let red = this.parse(RedDef);
        // this.addChild(red);

        // let red2 = this.parse(BlueDef);
        // red2.x = 300;
        // red2.y = 300;
        // this.addChild(red2);
    }
    
}

export default FirstScene;