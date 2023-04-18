import CarDState from "./card";

class UIStore {
  card: CarDState;

  constructor() {
    this.card = new CarDState();
  }
}

export default UIStore;
