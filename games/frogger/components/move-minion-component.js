import * as Engine from "../../../engine/engine.js"

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
    }
}