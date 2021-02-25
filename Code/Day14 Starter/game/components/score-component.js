import * as Engine from "/engine/engine.js"

class ScoreComponent extends Engine.Component{
    static name = "ScoreComponent"
    constructor(gameObject){
        super(gameObject);
        this.score = 0;
    }
}

export default ScoreComponent;