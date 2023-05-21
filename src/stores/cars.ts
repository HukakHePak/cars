import { action, computed, makeAutoObservable, observable } from "mobx"
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

type CarSorter = "price asc" | "price desc" | "date desc"

class CarStore {
  list: Car[] = []

  selected: Car = null

  @observable filter: CarFilter = {}

  @observable sorter: CarSorter = "date desc"

  constructor() {
    makeAutoObservable(this)
  }

  @action.bound setFilter(value: CarFilter) {
    this.filter = value
  }

  @action.bound setSorter(value: CarSorter) {
    this.sorter = value
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
    car.photo
    Backend.createCar(car)
  }

  @computed get filteredList(): Car[] {
    const { bottomPrice, topPrice, search, modelId, brandId } = this.filter
    let carsList = this.list

    if (bottomPrice) {
      carsList = carsList.filter((car) => car.price >= bottomPrice)
    }

    if (topPrice) {
      carsList = carsList.filter((car) => car.price <= topPrice)
    }

    if (search) {
      carsList = carsList.filter((car) => {
        const searchString = (
          `${car.complectation.name.name} ${car.drive.name} ${car.kpp.name} `
          + `${car.engine.fuel} ${car.engine.perfomance} ${car.engine.volume} ${car.price} `
          + `${car.complectation.model.name} ${car.complectation.model.brand.name}`
        ).toLowerCase()
        return search.split(" ").some((part) => searchString.includes(part.toLowerCase()))
      })
    }

    if (modelId) {
      carsList = carsList.filter((car) => car.complectation.model.id === modelId)
    }

    if (brandId) {
      carsList = carsList.filter((car) => car.complectation.model.brand.id === brandId)
    }

    return carsList
  }

  @computed get sortedAndFilteredList(): Car[] {
    const list = [...this.filteredList]

    if (this.sorter === "date desc") return list.sort((c1, c2) => c2.id - c1.id)
    if (this.sorter === "price asc") return list.sort((c1, c2) => c1.price - c2.price)
    if (this.sorter === "price desc") return list.sort((c1, c2) => c2.price - c1.price)

    return list
  }
}

export default CarStore
