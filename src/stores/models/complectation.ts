import { makeAutoObservable } from "mobx"
import { Backend } from "stores/be"
import ComplectationView from "stores/view/complectation"
import Model from "./model"
import Name from "./name"
import Option from "./option"

class Complectation {
  id: number

  name: Name

  options: Option[] = [] // make options store

  model: Model = <Model>{}

  price: number

  constructor(complectation: Complectation) {
    makeAutoObservable(this)

    if (!complectation) {
      return
    }

    const { id, name, model, price, options } = complectation

    this.id = id
    this.name = name
    this.options = options
    this.model = model
    this.price = price
  }

  load() {
    // Backend.getCarComplectOptions(this.id); // TODO: взять опции комплектации
    Backend.getModelsByBrand(this.model.id);
  }

  delete(option: Option) {
    this.options.filter((opt: Option) => option.id !== opt.id)
  }

  static fromView(view: ComplectationView) {
    return new Complectation(<Complectation>{
      id: view.id,
      name: <Name>{ id: view.idtype, name: view.type_name },
      options: [],
      model: <Model>{ id: view.idmodel },
      price: view.price
    })
  }
}

export default Complectation
