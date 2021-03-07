export default {
  name: "MainScene",
  children: [
    { gameObject: { name: "MainController", components: [{ name: "MainControllerComponent" }] } },
    { gameObject: { name: "Time", components: [{ name: "TimeComponent" }] } },
    { prefabName: "PersonPrefab" },
    { prefabName: "WeatherPrefab" }

  ]
}