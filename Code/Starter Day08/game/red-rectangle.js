import GameObject from "../engine/game-object.js"
import MoveComponent from "./components/move-component.js"
import DrawComponent from "./components/draw-component.js"
/**
 * @class RedRectangle represents a game object that can be drawn and moved
 */
class RedRectangle extends GameObject{
    /**
     * Call the super constructor and add any GameObject-specific variables
     */
    constructor() {
        super();
        
        let moveComponent = new MoveComponent(this);
        this.components.push(moveComponent);
        
        let drawComponent = new DrawComponent(this, 'red');
        this.components.push(drawComponent);

    }

    
}

export default RedRectangle;