export default {
  name: "FirstScene", //Scene name
  children:[ //Game objects in the scene
    {
      //If we have the "prefabName" key, then it's a prefab
      prefabName: "BlueRectangle",
      x: 300, //Set the position of the game object instance
      y: 300
    },
    {
      prefabName: "RedRectangle",
      /* x and y are optional */
    },
    {
      //If we have the "gameObject" key, then it's a one-off game object definition
      gameObject: {
        name: "GreenRectangle",
        components: [
          {
            name: "DrawComponent",
            args: ["green"]
          },
          {
            name: "MoveComponent",
            args: []
          }
        ]
      },
      x: 200,
      y: 400,
    }
  ]
}