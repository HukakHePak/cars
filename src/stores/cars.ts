import { makeAutoObservable } from "mobx";
import { Backend } from "./be";
import { Car } from "./models/car";
// import { Backend } from "./be";

class CarStore {
  list: Car[] = [
    <Car>{ id: 1 },
    <Car>{ id: 2 },
    <Car>{ id: 3 },
    <Car>{ id: 4 },
    <Car>{ id: 5 },
    <Car>{ id: 6 },
    <Car>{ id: 7 },
    <Car>{ id: 8 },
    <Car>{ id: 9 },
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
    car.complectation.load();
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
