export default {
  name: "MainScene",
  children: [
    {
      gameObject: {
        name: "MainCamera", components: [
          { name: "WorldCameraComponent" }
        ]
      }, sx: 100, sy: 100,
    },
    {
      gameObject: {
        name: "ScreenCamera", components: [
          { name: "ScreenCameraComponent" }
        ], children: [

          { gameObject: { name: "ScreenTextShadow", components: [{ name: "ScreenTextComponent", args: ["'Frogger' Game Example", { color: "gray" }] }] }, x: 102, y: 42 },
          { gameObject: { name: "ScreenText", components: [{ name: "ScreenTextComponent", args: ["'Frogger' Game Example", { color: "white" }] }] }, x: 100, y: 40 },
          { gameObject: { name: "Score", components: [{ name: "ScreenTextComponent", args: ["0", { color: "white" }] }] }, x: 100, y: 100 }
        ]
      }

    },
    { gameObject: { name: "SafetyZone", components: [{ name: "DrawGeometryComponent", args: ["brown"] }, { name: "RectangleGeometryComponent", args: [10, 1] },] }, x: 0, y: 2 },
    { gameObject: { name: "RoadOne", components: [{ name: "DrawGeometryComponent", args: ["gray"] }, { name: "RectangleGeometryComponent", args: [10, 1] },] }, x: 0, y: 1 },
    { gameObject: { name: "RoadTwo", components: [{ name: "DrawGeometryComponent", args: ["darkgray"] }, { name: "RectangleGeometryComponent", args: [10, 1] },] }, x: 0, y: 0 },
    { gameObject: { name: "RoadTwo", components: [{ name: "DrawGeometryComponent", args: ["gray"] }, { name: "RectangleGeometryComponent", args: [10, 1] },] }, x: 0, y: -1 },
    { gameObject: { name: "WinArea", components: [{ name: "DrawGeometryComponent", args: ["brown"] }, { name: "RectangleGeometryComponent", args: [10, 1] },] }, x: 0, y: -2 },
    {
      gameObject: {
        name: "MainController", components: [
          { name: "MainControllerComponent", },
          { name: "ScoreComponent" },
          { name: "SceneChangerComponent" }
        ]
      }
    },
    { prefabName: "frog", x: 0, y: 2 },
  ]
}