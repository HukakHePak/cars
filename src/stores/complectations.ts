import { makeAutoObservable } from "mobx"
import { Backend } from "./be"
import Complectation from "./models/complectation"
import Name from "./models/name"

class ComplectationStore {
  list: Complectation[] = []

  names: Name[]

  selected: Complectation

  constructor() {
    makeAutoObservable(this)
    this.loadNames()
  }

  loadNames() {
    Backend.getComplectationNames().then((list: Name[]) => {
      this.names = list
    })
  }

  load(idModel: number) {
    Backend.getComplectationsByModel(idModel).then((list: Complectation[]) => {
      this.list = list
    })
  }

  get asOptions() {
    return this.list.map((item: Complectation) => ({
      id: item.id,
      name: item.name.name
    }))
  }

  select(complectation: Complectation) {
    this.selected = complectation
  }

  clear() {
    this.selected = null
  }
}

export default ComplectationStore
