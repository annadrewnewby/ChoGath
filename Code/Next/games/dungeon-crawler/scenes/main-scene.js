export default {
  name: "MainScene",
  children: [
    {
      gameObject:{
        name:"MainCamera",components:[
          {name:"WorldCameraComponent"}
        ]
      },sx:20,sy:20
    },
    {
      gameObject:{
        name:"ScreenCamera",components:[
          {name:"ScreenCameraComponent"}
        ],children:[
          
          { gameObject: { name: "ScreenTextShadow", components: [{ name: "ScreenTextComponent", args: ["Dungeon Crawler Example", { color: "gray" }] }] }, x: 102, y: 42 },
          { gameObject: { name: "ScreenText", components: [{ name: "ScreenTextComponent", args: ["Dungeon Crawler Example", { color: "white" }] }] }, x: 100, y: 40 },
        ]
      }
    },
    {
      gameObject: {
        name: "Ground",
        components: [
          { name: "DrawGeometryComponent", args: ["white"] },
          { name: "RectangleGeometryComponent", args: [8, 8] },
        ]
      }, 
    },
    {
      prefabName: "MainController"
    },
    { prefabName: "Hero", x: 0, y: 0 },
  ]
}