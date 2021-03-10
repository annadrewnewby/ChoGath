import * as Engine from "../../../engine/engine.js"

export default  class MoveComponent extends Engine.Component{
    constructor(gameObject){
        super(gameObject);
    }
    update(){
        this.gameObject.transform.x++; 
        this.gameObject.transform.y++;
    }
}