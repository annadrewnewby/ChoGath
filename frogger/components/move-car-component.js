import * as Engine from "../../engine/engine.js"

export default  class MoveMinionComponent extends Engine.Component{
    constructor(gameObject){
        super(gameObject);
    }
    update(){
        this.gameObject.x++; 
    }
}