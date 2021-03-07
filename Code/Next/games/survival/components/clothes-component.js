import * as Engine from "/engine/engine.js"

export default  class ClothesComponent extends Engine.Component{
    constructor(gameObject){
        super(gameObject);
        this.hats = [{name:"none"}];
        this.shirts = [{name:"T-shirt"}];
        this.pants = [{name:"Jeans"}];
        this.socks = [{name:"Cotton Socks"}];
        this.shoes = [{name:"Sneakers"}];
    }
    
    
}