import { makeAutoObservable } from "mobx"
import { Backend } from "./be"
import Complectation from "./models/complectation"
import Name from "./models/name"
import { RootStore } from "contexts/RootStoreContext"

class ComplectationStore {
  list: Complectation[] = []

  names: Name[]

  selected: Complectation

  constructor() {
    makeAutoObservable(this)
    this.loadNames()
    this.load()
  }

  loadNames() {
    Backend.getComplectationNames().then((list: Name[]) => {
      this.names = list
    })
  }

  load(idModel: number = null) {
    Backend.getComplectationsByModel(idModel).then((list: Complectation[]) => {
      this.list = list
    })
  }

  get asOptions() {
    const selectedModel = RootStore.models.selected

    if (selectedModel) {
      return this.list
        .filter((item) => item.model.id === selectedModel.id)
        .map((item: Complectation) => ({
        id: item.id,
        name: item.name.name,
        model: item.model.name
      }))
    }

    return []
  }

  select(complectation: Complectation) {
    this.selected = complectation
  }

  clear() {
    this.selected = null
  }

  create(complectation: { complectationNameId: number, price: number, modelId: number }): Promise<void> {
    return Backend.createComplectation(complectation).then(() => {
      this.load()
    })
  }
}

export default ComplectationStore
