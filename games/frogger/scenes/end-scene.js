export default {
    name: "EndScene",
    children: [
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
            
      { gameObject: { name: "ScreenTextShadow", components: [{ name: "ScreenTextComponent", args: ["END SCENE", { color: "gray" }] }] }, x: 102, y: 42 },
      { gameObject: { name: "ScreenText", components: [{ name: "ScreenTextComponent", args: ["END SCENE", { color: "purple" }] }] }, x: 100, y: 40 },
      { gameObject: { name: "ScreenText", components: [{ name: "ScreenTextComponent", args: ["Score", { color: "white" }] }] }, x: 50, y: 100 },
      { gameObject: { name: "Score", components: [{ name: "ScreenTextComponent", args: ["0", { color: "white" }] }] }, x: 300, y: 100 }
          ]
        }
      },
      { gameObject: { name: "MainController", components: [{ name: "SceneChangerComponent" }, {name: "EndSceneCountdownComponent"}] } },
    ]
  }