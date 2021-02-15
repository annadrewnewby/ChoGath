/**
 * @class GameObject representing a game object in the scene
 */
class GameObject {
    static deserialize(gameObjectDefinition, allComponents){
        let toReturn = new GameObject();
        toReturn.name = gameObjectDefinition.name;
        for(let componentDefinition of gameObjectDefinition.components){
            let componentClass = allComponents.find(i=>i.name == componentDefinition.name);
            let component = new componentClass(toReturn, ...componentDefinition.args || []);
            toReturn.components.push(component);
        }
        return toReturn;
    }
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