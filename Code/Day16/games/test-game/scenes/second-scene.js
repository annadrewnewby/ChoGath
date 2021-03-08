export default {
  name: "SecondScene", //Scene name
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
      prefabName: "RedRectangle",
      /* x and y are optional */
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