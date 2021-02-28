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
        name: "NorthButton",
        children: [
          {
            gameObject: {
              name: "ButtonRectangle",
              components: [
                { name: "RectangleGeometryComponent", args: [200, 100] },
                { name: "DrawGeometryComponent", args: ["lightblue"] },
                { name: "ScreenButtonClickComponent", args:[{method:"MainCotroller.MainControllerComponent.Move"}, {args:["North"]}]}
              ]
            }, x: 100, y: 50
          },
          {
            gameObject: {
              name: "ButtonText",
              components: [
                { name: "ScreenTextComponent", args: ["North", { color:"black", font: "24pt arial", alignment: "center", justification: "middle" }] }
              ]
            }, x: 100, y: 50
          }
        ]
      },x: 200, y: 100
    },
    {
      gameObject: {
        name: "SouthButton",
        children: [
          {
            gameObject: {
              name: "ButtonRectangle",
              components: [
                { name: "RectangleGeometryComponent", args: [200, 100] },
                { name: "DrawGeometryComponent", args: ["Green"] },
                { name: "ScreenButtonClickComponent", args:[{method:"MainCotroller.MainControllerComponent.Move"}, {args:["South"]}]}
              ]
            }, x: 100, y: 50
          },
          {
            gameObject: {
              name: "ButtonText",
              components: [
                { name: "ScreenTextComponent", args: ["South", { color:"black", font: "24pt arial", alignment: "center", justification: "middle" }] }
              ]
            }, x: 100, y: 50
          }
        ]
      },x: 200, y: 300
    },
    {
      gameObject: {
        name: "WestButton",
        children: [
          {
            gameObject: {
              name: "ButtonRectangle",
              components: [
                { name: "RectangleGeometryComponent", args: [200, 100] },
                { name: "DrawGeometryComponent", args: ["Red"] },
                { name: "ScreenButtonClickComponent", args:[{method:"MainCotroller.MainControllerComponent.Move"}, {args:["West"]}]}
              ]
            }, x: 100, y: 50
          },
          {
            gameObject: {
              name: "ButtonText",
              components: [
                { name: "ScreenTextComponent", args: ["West", { color:"black", font: "24pt arial", alignment: "center", justification: "middle" }] }
              ]
            }, x: 100, y: 50
          }
        ]
      },x: 100, y: 200
    },
    {
      gameObject: {
        name: "EastButton",
        children: [
          {
            gameObject: {
              name: "ButtonRectangle",
              components: [
                { name: "RectangleGeometryComponent", args: [200, 100] },
                { name: "DrawGeometryComponent", args: ["Yellow"] },
                { name: "ScreenButtonClickComponent", args:[{method:"MainCotroller.MainControllerComponent.Move"}, {args:["East"]}]}
              ]
            }, x: 100, y: 50
          },
          {
            gameObject: {
              name: "ButtonText",
              components: [
                { name: "ScreenTextComponent", args: ["East", { color:"black", font: "24pt arial", alignment: "center", justification: "middle" }] }
              ]
            }, x: 100, y: 50
          }
        ]
      },x: 300, y: 200
    },
    { gameObject: { name: "ScreenTextShadow", components: [{ name: "ScreenTextComponent", args: ["Text Adventure", { color: "gray" }] }] }, x: 210, y: 42 },
    { gameObject: { name: "ScreenText", components: [{ name: "ScreenTextComponent", args: ["Text Adventure", { color: "white" }] }] }, x: 211, y: 40 },
  ]
}