export default {
  name: "BlueScene",
  children: [
    {
      prefabName: "MainCamera"
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
      gameObject: {
        name: "Ground",
        components: [
          { name: "DrawGeometryComponent", args: ["blue"] },
          { name: "RectangleGeometryComponent", args: [8, 8] },
        ]
      }, x:0, y:0
    },
    {
      prefabName:"MainController"
    },
    { prefabName: "Hero", x: 0, y: 0 },
    
  ]
}