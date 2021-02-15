import GameObject from "./game-object.js"


/**
 * @class Scene representing a scene in the game.
 * This class should be extended in your game.
 */
class Scene {

    /**
     * Default constructor that creates a array of children.
     * These should be populated with GameObjects
     */
    constructor() {
        this.children = [];
    }
    static deserialize(sceneDefinition, allComponents, allPrefabs) {
        let toReturn = new Scene();
        toReturn.name = sceneDefinition.name;
        for (let objectDefinition of sceneDefinition.children) {
            let gameObject;
            let gameObjectDefinition;
            if (objectDefinition.prefabName) gameObjectDefinition = allPrefabs.find(i => i.name == objectDefinition.prefabName);
            else/*It's a one-off game object */ gameObjectDefinition = objectDefinition.gameObject;

            gameObject = GameObject.deserialize(gameObjectDefinition, allComponents);
            gameObject.x = objectDefinition.x || 0;
            gameObject.y = objectDefinition.y || 0;
            toReturn.children.push(gameObject);
        }
        return toReturn;

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
        for (let i = 0; i < this.children.length; i++) {
            let child = this.children[i];
            child.draw(ctx);
        }
    }
    /**
     * Update all the Gamebjects
     */
    update() {
        //Use an extended for loop to call update on all gameObjects
        for (let child of this.children) {
            child.update();
        }
    }
}

export default Scene;