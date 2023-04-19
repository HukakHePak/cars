import { makeAutoObservable } from "mobx";
import { Car } from "./models/car";
// import { Backend } from "./be";

class CarsStore {
  list: Car[] = [
    <Car>{
      id: 3,
      brand: "porche",
      complectation: "ultra luxury",
      price: 100204,
    },
    <Car>{ id: 4 },
    <Car>{ id: 5 },
    <Car>{ id: 6 },
    <Car>{ id: 7 },
    <Car>{ id: 8 },
    <Car>{ id: 9 },
    <Car>{ id: 10 },
  ];

  selected: Car;

  constructor() {
    makeAutoObservable(this);
  }

  select(car: Car = null) {
    this.selected = car;
  }

  //   load() {
  //     // Backend.
  //   }
}

export default CarsStore;
