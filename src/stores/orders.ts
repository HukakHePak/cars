import { makeAutoObservable } from "mobx";
import { Backend } from "./be";
import { Car } from "./models/car";
import Order from "./models/order";
// import { Backend } from "./be";

class OrderStore {
  list: Order[];

  selected: Car;

  constructor() {
    makeAutoObservable(this);
  }

  select(car: Car = null) {
    this.selected = car;
  }

  create(car: Car) {
    Backend.createCar(car);
  }

  //   load() {
  //     // Backend.
  //   }
}

export default OrderStore;
