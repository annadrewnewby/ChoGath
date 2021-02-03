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
    }
    /**
     * Update the game object. Treat this method as if it were abstract.
     */
    update() {} //This needs to be overriden in a sub-class or nothing will happen here.
    /**
     * Draw the game object. Treat this method as if it were abstract.
     * @param {2D Context from a Canvas} ctx the contex to which we draw 
     */
    draw(ctx) {} //This needs to be overridden in a sub-class or nothing will happen here.
}

export default GameObject;