export default {
  name: "RedScene",
  children: [
    {
      gameObject: {
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
          { name: "RectangleGeometryComponent", args: [640, 480] },
        ]
      }, x:320, y:340
    },
    {
      prefabName:"MainController"
    },
    { prefabName: "Hero", x: 320, y: 340 },
    
  ]
}