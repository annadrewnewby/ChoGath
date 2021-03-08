import * as Engine from "/engine/engine.js"

export default  class WeatherComponent extends Engine.Component{
    constructor(gameObject){
        super(gameObject);
        this.clear = 100;
        this.wind = 0;
        this.rain = 0;
        this.temperature = 70;
    }
    
    
}