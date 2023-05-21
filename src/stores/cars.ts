import { makeAutoObservable } from "mobx"
import { Backend } from "./be"
import { Car } from "./models/car"
import CarView from "./view/car"
import { RootStore } from "contexts/RootStoreContext"
import Model from "./models/model"
// import { Backend } from "./be";

class CarStore {
  list: Car[] = []

  selected: Car

  constructor() {
    makeAutoObservable(this)
  }

  load() {
    Backend.getCarsByFilter().then((list: Car[]) => {
      this.list = list
    })
  }

  loadPublic() {
    Backend.getPublicCars().then((list: Car[]) => {
      this.list = list
    })
  }

  select(car: Car = null) {
    this.selected = car
    // car.load();
  }

  static create(car: CarView) {
    car.photo
    Backend.createCar(car)
  }
}

export default CarStore
