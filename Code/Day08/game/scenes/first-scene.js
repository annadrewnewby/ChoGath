export default {
  name: "FirstScene",
  children:[
    {
      prefabName: "BlueRectangle",
      x: 300,
      y: 300
    },
    {
      prefabName: "RedRectangle",
      x: 0,
      y: 0
    },
    {
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