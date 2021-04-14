import * as Engine from "../../../engine/engine.js"

export default  class HitsComponent extends Engine.Component{
    constructor(gameObject){
        super(gameObject);
        this.hits = 0;
    }
}