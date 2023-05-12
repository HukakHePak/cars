import { makeAutoObservable } from "mobx"
import { Backend } from "./be"
import Name from "./models/name"

class BrandStore {
  list: Name[] = []

  selected: Name

  constructor() {
    makeAutoObservable(this)
    this.load()
  }

  load() {
    Backend.getBrands().then((list: Name[]) => {
      this.list = list
      this.clear()
    })
  }

  select(brand: Name) {
    this.selected = brand
  }

  clear() {
    this.selected = null
  }
}

export default BrandStore
