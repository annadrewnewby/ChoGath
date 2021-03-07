export default {
  name: "frog",
  components: [
    { name: "DrawGeometryComponent", args: ["green"] },
    { name: "RectangleGeometryComponent", args: [.6, .75] },
    { name: "KeyboardBumpComponent", args: [1] }
  ],
  children: [
    {
      gameObject: {
        name: "LeftEye", components: [
          { name: "DrawGeometryComponent", args: ["white"] },
          { name: "CircleGeometryComponent", args: [.1] }
        ]
      }, x:.14, y:-.35
    },
    {
      gameObject: {
        name: "LeftEye", components: [
          { name: "DrawGeometryComponent", args: ["white"] },
          { name: "CircleGeometryComponent", args: [.1] }
        ]
      }, x:-.14, y:-.35
    }
  ]
}