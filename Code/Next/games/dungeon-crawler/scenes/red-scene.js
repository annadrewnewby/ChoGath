export default {
  name: "RedScene",
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
          
        ]
      }
    },
    {
      gameObject: {
        name: "Ground",
        components: [
          { name: "DrawGeometryComponent", args: ["pink"] },
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