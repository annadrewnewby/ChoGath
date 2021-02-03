import GameObject from "../engine/game-object.js"
/**
 * @class RedRectangle represents a game object that can be drawn and moved
 */
class RedRectangle extends GameObject{
    /**
     * Call the super constructor and add any GameObject-specific variables
     */
    constructor() {
        super();
    }
    /**
     * Update the object by increasing the x and y values by one on every frame
     */
    update() {
        this.x++; 
        this.y++;
    }
    /**
     * Draw the game object
     * @param {2D Context from a Canvas} ctx where the game object is drawn
     */
    draw(ctx) {//How does the game object draw itself?
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, 100, 200);//fillRect expects the upper left-hand coordinates and then the width and height of the rectangle

    }
}

export default RedRectangle;