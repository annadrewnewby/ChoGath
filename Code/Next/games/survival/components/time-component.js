import * as Engine from "/engine/engine.js"

export default  class TimeComponent extends Engine.Component{
    constructor(gameObject){
        super(gameObject);
        this.minutes = 0;
    }
    get minute(){
        return this.minutes % 60;
    }
    get hour(){
        return this.minutes % 60;
    }
    get day(){
        return this.minutes % (60*24);
    }
    
}