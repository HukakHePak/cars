import { makeAutoObservable } from "mobx"
import { Backend } from "./be"
import Model from "./models/model"

class ModelStore {
  list: Model[] = []

  selected: Model

  constructor() {
    makeAutoObservable(this)
    this.load()
  }

  load(brandId: number = null) {
    Backend.getModelsByBrand(brandId).then((list: Model[]) => {
      this.list = list
    })
  }

  select(model: Model) {
    this.selected = model
  }

  clear() {
    this.selected = null
  }
}

export default ModelStore
