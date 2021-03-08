import * as Engine from "/engine/engine.js"

export default  class VitalsComponent extends Engine.Component{
    constructor(gameObject){
        super(gameObject);
        this.hunger = 100;
        this.thirst = 100;
        this.warmth = 100;
        this.sleep = 100;
        this.hygiene = 100;
        this.cash = 0;
    }
    
    
}