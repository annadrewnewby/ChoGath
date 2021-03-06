export default {
  name: "MainScene", //Scene name
  children: [ //Game objects in the scene
    {
      gameObject:{
        name:"MainCamera",components:[
          {name:"WorldCameraComponent"}
        ]
      },x:-100,y:-100
    },
    { prefabName: "KeyboardRectangle", x: 300, y: 300 },
    { prefabName: "KeyboardBumpRectangle", x: 50, y: 300 },
    {
      prefabName: "ClickToDestroy",
      x: 0, y: 0
    },
    {
      gameObject: {
        name: "ScreenText",
        components: [
          {
            name: "ScreenTextComponent",
            args: ["Main Scene"]
          }
        ]
      },
      x: 400, y: 40
    },
    {
      gameObject: {
        name: "MainController",
        components: [
          {
            name: "ScreenTextComponent",
            args: ["0",]
          },
          {
            name: "MoleMakerComponent",
          },
          {
            name: "ScoreComponent",
          }
        ]
      },
      x: 20, y: 40
    }
  ]
}