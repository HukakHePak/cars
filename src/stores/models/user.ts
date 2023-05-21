import { action, makeObservable, observable } from "mobx"
import { Backend } from "stores/be"

export enum UserType {
  director = "D",
  admin = "A",
  manager = "M",
  stuff = "S",
  unauth = "U",
  developer = "V"
}

export type UserInfo<PropName extends "id" | "iduser" = "id"> = {
  id: number
  iduser: number
  name: string
  surname: string
  patronymic: string | null
  phone: string
  email: string
  login: string
  password: string
  photo: string | null
  type: string
} & { [P in PropName]: number }

export class User {
  id = 0

  iduser = 0

  name = "Unknown"

  surname = "Unknown"

  patronymic = "Unknown"

  phone = "Unknown"

  email = "Unknown"

  login = "Unknown"

  password = "Unknown"

  photo: string | null = null

  type = "Unknown"

  constructor(user?: UserInfo<"iduser">) {
    makeObservable(this, {
      iduser: true,
      save: true,
      info: true,
      patronymic: observable,
      phone: observable,
      photo: observable,
      id: observable,
      name: observable,
      surname: observable,
      email: observable,
      login: observable,
      password: observable,
      type: observable,
      setUser: action,
      update: action
    })

    if (user) {
      this.setUser(user)
    }
  }

  setUser(user: UserInfo<"iduser"> | UserInfo): void
  setUser(user: UserInfo<"iduser"> | UserInfo, shouldUpdate: true): Promise<void>
  async setUser(user: UserInfo<"iduser"> | UserInfo, shouldUpdate = false): Promise<void> {
    this.id = user.id ?? user.iduser // eslint-disable-line @typescript-eslint/no-unsafe-assignment
    this.name = user.name
    this.surname = user.surname
    this.patronymic = user.patronymic || ""
    this.phone = user.phone
    this.email = user.email
    this.photo = user.photo
    this.login = user.login
    this.password = user.password
    this.type = user.type

    if (shouldUpdate) {
      return this.save()
    }
  }

  save = async (): Promise<void> => {
    await Backend.editUser(this.info)
  }

  update = async (): Promise<void> => {
    const user = (await Backend.getUsers(this.id)) as UserInfo<"iduser">
    this.setUser(user)
  }

  get info(): UserInfo {
    return {
      id: this.id,
      iduser: this.iduser,
      name: this.name,
      surname: this.surname,
      patronymic: this.patronymic,
      phone: this.phone,
      email: this.email,
      photo: this.photo,
      login: this.login,
      password: this.password,
      type: this.type
    }
  }
}
