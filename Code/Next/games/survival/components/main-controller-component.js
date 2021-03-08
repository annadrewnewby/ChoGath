import * as Engine from "/engine/engine.js"

class Location {
  constructor(name, connectionNames, inventory) {
    this.name = name;
    this.connections = [];
    this.connectionNames = connectionNames;
    this.inventory = inventory;
  }
}

export default class MainControllerComponent extends Engine.Component {
  locations = [];
  constructor(gameObject) {
    super(gameObject);
  }
  start() {
    //Generate the world
    this.create("Alley", ["Intersection", "Inside Garbage Can"], []);
    this.create("Inside Garbage Can", ["Alley"], []);
    this.create("Intersection", ["Alley"], [])
    this.connectLocations()
    this.location = this.getLocation("Alley");
  }
  create(name, connectionNames, inventory) {
    this.locations.push(new Location(name, connectionNames, inventory));
  }
  connectLocations() {
    for (let i = 0; i < this.locations.length; i++) {
      let location = this.locations[i];

      for (let k = 0; k < this.locations.length; k++) {
        let possibleConnection = this.locations[k];
        if (location.connectionNames.includes(possibleConnection.name)) {
          location.connections.push(possibleConnection)
        }

      }
    }
  }
  getLocation(name) {
    return this.locations.find(i => i.name == name);
  }


}