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

          { gameObject: { name: "ScreenTextShadow", components: [{ name: "ScreenTextComponent", args: ["'Survival' Game Example", { color: "gray" }] }] }, x: 102, y: 42 },
          { gameObject: { name: "ScreenText", components: [{ name: "ScreenTextComponent", args: ["'Survival' Game Example", { color: "white" }] }] }, x: 100, y: 40 },
          {
            gameObject: {
              name: "Hunger",
              components: [
                {
                  name: "ScreenTextComponent", args: ["?", { color: "white" }]
                }
              ]
            }, x: 20, y: 200
          },
          {
            gameObject: {
              name: "Thirst",
              components: [
                {
                  name: "ScreenTextComponent", args: ["?", { color: "white" }]
                }
              ]
            }, x: 20, y: 400
          },
        ]
      }
    },
    {
      gameObject: {
        name: "MainController", components: [
          
        ]
      }
    },
    {
      gameObject:{name:"Time", components:[{name:"TimeComponent", args:[]}]}
    },
    {
      prefabName:"PersonPrefab"
    },
    {
      prefabName:"WeatherPrefab"
    }

  ]
}