/**
 * @class GameObject representing a game object in the scene
 */
class GameObject {
    /**
     * Set the default values of x and y
     */
    constructor() {
        this.x = 0; 
        this.y = 0;
        this.components = [];
        
    }
    update(){
        for(let component of this.components){
            //Falsey
            if(component.update){
                component.update();
            }
        }
    }
    
    /**
     * Draw the game object
     * @param {2D Context from a Canvas} ctx where the game object is drawn
     */
    draw(ctx) {//How does the game object draw itself?
        for(let component of this.components){
            //Falsey
            if(component.draw){
                component.draw(ctx);
            }
        }
    }
}

export default GameObject;