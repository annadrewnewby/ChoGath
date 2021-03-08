export default {
  name: "FirstScene", //Scene name
  children:[ //Game objects in the scene
    {
      gameObject:{
        name:"MainCamera",components:[
          {name:"WorldCameraComponent"}
        ]
      }
    },
    {
      gameObject:{
        name:"ScreenCamera",components:[
          {name:"ScreenCameraComponent"}
        ],children:[
          
        ]
      }
    },
    {
      //If we have the "prefabName" key, then it's a prefab
      prefabName: "BlueRectangle",
      x: 300, //Set the position of the game object instance
      y: 300
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
    },
    {
      gameObject: {
        name: "EmptyChangeScene",
        components: [
          {
            name: "ChangeSceneComponent",
          }
        ]
      }
    }
  ]
}