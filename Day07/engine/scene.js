/**
 * @class Scene representing a scene in the game.
 * This class should be extended in your game.
 */
class Scene{
    
    /**
     * Default constructor that creates a array of children.
     * These should be populated with GameObjects
     */
    constructor() {
        this.children = [];
    }
    /**
     * Return a reference to the children in this scene
     * @return {Array} the array of child GameObjects
     */
    getChildren() {
        return this.children;
    }
    /**
     * 
     * @param {GameObject} child the GameObject child to add to the scene
     */
    addChild(child) {
        this.children.push(child)
    }
    /**
     * 
     * @param {2D Rendering Context from a Canvas} ctx the 2D context to which we draw
     */
    draw(ctx) {
        //Loop through all the game objects and render them.
        for(let i = 0; i < this.children.length; i++) {
            let child = this.children[i];
            child.draw(ctx);
        }
    }
    /**
     * Update all the Gamebjects
     */
    update() {
        //Use an extended for loop to call update on all gameObjects
        for(let child of this.children) {
            child.update();
        }
    }
}

export default Scene;