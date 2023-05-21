import { makeAutoObservable } from "mobx"
import { Backend } from "./be"
import Name from "./models/name"

class BrandStore {
  list: Name[] = []

  selected: Name | null = null

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

  select(idBrand: Name["id"]) {
    this.selected = this.list.find((item) => item.id === idBrand)
  }

  clear() {
    this.selected = null
  }  

  create(name: string): Promise<void> {
    return Backend.createBrand(name).then(() => {
      this.load()
    })
  }
}

export default BrandStore
