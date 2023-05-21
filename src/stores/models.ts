import { makeAutoObservable } from "mobx"
import { Backend } from "./be"
import Model from "./models/model"
import { RootStore } from "contexts/RootStoreContext"

class ModelStore {
  list: Model[] = []

  selected: Model | null = null

  constructor() {
    makeAutoObservable(this)
    this.load()
  }

  load(brandId: number = null) {
    Backend.getModelsByBrand(brandId).then((list: Model[]) => {
      this.list = list
    })
  }

  select(idModel: Model["id"]) {
    this.selected = this.list.find((item) => item.id === idModel)
  }

  clear() {
    this.selected = null
  }

  create(model: Model): Promise<void> {
    return Backend.createModel(model).then(() => {
      this.load()
    })
  }

  get asOptions(): Model[] {
    const selectedBrand = RootStore.brands.selected
    if (selectedBrand) {
      return this.list.filter((model) => model.idBrand === selectedBrand.id)
    }

    return []
  }

}

export default ModelStore
