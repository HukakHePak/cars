import { makeObservable, observable } from "mobx"
import { Backend } from "./be"
import Type from "./models/name"

class FuelStore {
  constructor() {
    makeObservable(this)
  }

  @observable
  list: Type[]

  load() {
    Backend.getFuelTypes().then((list: Type[]) => {
      this.list = list
    })
  }
}

export default FuelStore
