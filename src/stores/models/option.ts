import { makeAutoObservable } from "mobx"
import { Backend } from "stores/be"
import OptionView from "stores/view/option"
import Name from "./name"

class Option {
  id: number

  type: Name

  name: string

  description: string

  photo: string

  price: number

  count: number

  constructor(option: Option | null) {
    makeAutoObservable(this)

    if (!option) return

    const { id, type, name, description, photo, price, count } = option

    this.id = id
    this.type = type
    this.name = name
    this.description = description
    this.photo = photo
    this.price = price
    this.count = count
  }

  static fromView(view: OptionView) {
    return new Option(<Option>{
      id: view.id,
      type: <Name>{ id: view.idtype, name: view.type_name },
      name: view.name,
      description: view.description,
      photo: view.photo,
      price: view.price,
      count: view.count
    })
  }

  arrive(amount: number) {
    Backend.createOptionArrive(this.id, amount).then(() => {
      this.count += amount
    })
  }
}

export default Option
