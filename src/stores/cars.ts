import { makeAutoObservable } from "mobx"
import { Backend } from "./be"
import { Car } from "./models/car"
import CarView from "./view/car"
import Name from "./models/name"
import Model from "./models/model"
// import { Backend } from "./be";

type CarFilter = {
  bottomPrice?: number;
  topPrice?: number;
  search?: string;
  brandId?: Name["id"];
  modelId?: Model["id"];
}

type CarSorter = "price asc" | "price desc" | undefined

class CarStore {
  list: Car[] = []

  selected: Car

  filter: CarFilter = {}

  sorter: CarSorter

  constructor() {
    makeAutoObservable(this)
  }

  setFilter(value: CarFilter) {
    this.filter = value
  }

  setSorter(value: CarSorter) {
    this.sorter = value
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
        const searchString = (`${car.complectation.name.name} ${car.drive.name} ${car.kpp.name}`
          + `${car.engine.fuel} ${car.engine.perfomance} ${car.engine.volume} ${car.complectation.model.name} ${car.complectation.model.brand.name}`).toLowerCase()
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

  get sortedAndFilteredList(): Car[] {
    const list = this.filteredList

    if (this.sorter === "price asc") return list.sort((c1, c2) => c1.price - c2.price)
    if (this.sorter === "price desc") return list.sort((c1, c2) => c2.price - c1.price)

    return list
  }
}

export default CarStore
