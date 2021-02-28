export default {
  name: "MainScene",
  children: [
    {
      gameObject: {
        name: "MainController", components: [
          { name: "ScreenTextComponent", args: ["0", { color: "white" }] },
          { name: "MainControllerComponent", },
          { name: "ScoreComponent" },
        ]
      }, x: 20, y: 40
    },
    {
      gameObject: {
        name: "CorrectText",
        components: [
          {
            name: "ScreenTextComponent", args: ["?", { color: "white" }]
          }
        ]
      }, x: 20, y: 200
    },
    {
      gameObject: {
        name: "GuessedLetters",
        components: [
          {
            name: "ScreenTextComponent", args: ["?", { color: "white" }]
          }
        ]
      }, x: 20, y: 400
    },
    {
      gameObject: {
        name: "Button",
        x: 500, y: 500,
        children: [
          {
            gameObject: {
              name: "ButtonRectangle",
              components: [
                { name: "RectangleGeometryComponent", args: [200, 100] },
                { name: "DrawGeometryComponent", args: ["Yellow"] },
                { name: "ScreenButtonClickComponent" }
              ]
            }
          },
          {
            gameObject: {
              name: "ButtonText",
              components:[
                {name:"ScreenTextComponent", args:["Button"]}
              ], x:20, y:20
          },
          }
        ]
      }
    },
    { gameObject: { name: "ScreenTextShadow", components: [{ name: "ScreenTextComponent", args: ["Text Adventure", { color: "gray" }] }] }, x: 102, y: 42 },
    { gameObject: { name: "ScreenText", components: [{ name: "ScreenTextComponent", args: ["Text Adventure", { color: "white" }] }] }, x: 100, y: 40 },
  ]
}