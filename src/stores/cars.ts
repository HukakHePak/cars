import { makeAutoObservable } from "mobx"
import { Backend } from "./be"
import { Car } from "./models/car"
import CarView from "./view/car"
import Name from "./models/name"
import Model from "./models/model"
// import { Backend } from "./be";

type CarFilter = {
  bottomPrice?: number
  topPrice?: number
  search?: string
  brandId?: Name["id"]
  modelId?: Model["id"]
}

class CarStore {
  list: Car[] = []

  selected: Car = null

  filter: CarFilter = {}

  constructor() {
    makeAutoObservable(this)
  }

  setFilter(value: CarFilter) {
    this.filter = value
  }

  load() {
    Backend.getCarsByFilter().then((list: Car[]) => {
      this.list = list
    })
  }

  async loadPublic() {
    return Backend.getPublicCars().then((list: Car[]) => {
      this.list = list
    })
  }

  select(car: Car = null) {
    this.selected = car
    // car.load();
  }

  static create(car: CarView) {
    Backend.createCar(car)
  }

  get filteredList(): Car[] {
    const { bottomPrice, topPrice, search, modelId, brandId } = this.filter
    let carsList = this.list

    if (bottomPrice !== undefined) {
      carsList = carsList.filter((car) => car.price >= bottomPrice)
    }

    if (topPrice !== undefined) {
      carsList = carsList.filter((car) => car.price <= topPrice)
    }

    if (search !== undefined) {
      carsList = carsList.filter((car) => {
        const searchString = (
          `${car.complectation.name.name} ${car.drive.name} ${car.kpp.name}` +
          `${car.engine.fuel} ${car.engine.perfomance} ${car.engine.volume} ${car.complectation.model.name} ${car.complectation.model.brand.name}`
        ).toLowerCase()
        return search.split(" ").some((part) => searchString.includes(part.toLowerCase()))
      })
    }

    if (modelId !== undefined && modelId !== null) {
      carsList = carsList.filter((car) => car.complectation.model.id === modelId)
    }

    if (brandId !== undefined && brandId !== null) {
      carsList = carsList.filter((car) => car.complectation.model.brand.id === brandId)
    }

    return carsList
  }
}

export default CarStore
