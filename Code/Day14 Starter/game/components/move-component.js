import * as Engine from "/engine/engine.js"

class MoveComponent extends Engine.Component{
    static name = "MoveComponent"
    constructor(gameObject){
        super(gameObject);
    }
    update(){
        this.gameObject.x++; 
        this.gameObject.y++;
    }
}

export default MoveComponent;