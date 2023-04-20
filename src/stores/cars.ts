import { makeAutoObservable } from "mobx";
import { Backend } from "./be";
import { Car } from "./models/car";
// import { Backend } from "./be";

class CarStore {
  list: Car[] = [
    new Car() {id: 1}
  ];

  selected: Car;

  constructor() {
    makeAutoObservable(this);
  }

  load() {
    Backend.getCarsByFilter().then((list: Car[]) => {
      this.list = list;
      // this.selected = null;
    });
  }

  select(car: Car = null) {
    this.selected = car;
    // car.load();
  }

  create(car: Car) {
    Backend.createCar(car).then(() => {
      this.list.push(car);
    });
  }

  //   load() {
  //     // Backend.
  //   }
}

export default CarStore;
