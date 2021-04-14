export default {
  name: "MainScene",
  children: [
    {
      gameObject: {
        name: "MainCamera", components: [
          { name: "WorldCameraComponent" }
        ]
      }
    },
    {
      gameObject: {
        name: "ScreenCamera", components: [
          { name: "ScreenCameraComponent" }
        ], children: [

          { gameObject: { name: "ScreenTextShadow", components: [{ name: "ScreenTextComponent", args: ["Cho'Gath", { color: "purple"}] }] }, x: 122, y: 42 },
          { gameObject: { name: "ScreenText", components: [{ name: "ScreenTextComponent", args: ["Cho'Gath", { color: "gray" }] }] }, x: 120, y: 40 },
          //{ gameObject: { name: "Score", components: [{ name: "ScreenTextComponent", args: ["0", { color: "white" }] }] }, x: 100, y: 100 }
        ]
      }

    },
    { gameObject: { name: "SafetyZone", components: [{ name: "DrawGeometryComponent", args: ["pink"] }, { name: "RectangleGeometryComponent", args: [640, 100] },] }, x: -300, y: 200 },
    { gameObject: { name: "RoadOne", components: [{ name: "DrawGeometryComponent", args: ["gray"] }, { name: "RectangleGeometryComponent", args: [640, 100] },] }, x: -300, y: -200 },
    { gameObject: { name: "RoadTwo", components: [{ name: "DrawGeometryComponent", args: ["darkgray"] }, { name: "RectangleGeometryComponent", args: [640, 100] },] }, x: -300, y: -100 },
    { gameObject: { name: "RoadThree", components: [{ name: "DrawGeometryComponent", args: ["gray"] }, { name: "RectangleGeometryComponent", args: [640, 100] },] }, x: -300, y: 0 },
    { gameObject: { name: "RoadFour", components: [{ name: "DrawGeometryComponent", args: ["darkgray"] }, { name: "RectangleGeometryComponent", args: [640, 100] },] }, x: -300, y: 100 },
    {
      gameObject: {
        name: "MainController", components: [
          { name: "ScreenTextComponent", args: ["0", { color: "white" }] },
          { name: "MainControllerComponent", },
          { name: "ScoreComponent" },
          { name: "SceneChangerComponent" }
        ]
      }, x: 20, y: 40
    },
    { prefabName: "chogath", x: 1, y: 230 },
  ]
}