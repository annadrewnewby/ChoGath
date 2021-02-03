import Component from "../../engine/component.js"

class MoveComponent extends Component{
    constructor(gameObject){
        super(gameObject);
    }
    update(){
        this.gameObject.x++; 
        this.gameObject.y++;
    }
}

export default MoveComponent;