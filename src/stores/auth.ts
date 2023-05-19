import { makeAutoObservable } from "mobx"
import { User, UserInfo } from "stores/models/user"
import { pipi } from "utils/api"

export interface IAuthForm {
  login: string
  password: string
}

class AuthStore {
  user: User | undefined = undefined

  error = <IAuthForm>{}

  constructor() {
    makeAutoObservable(this)
    this.load()
  }

  load() {
    pipi.get("me").then((u: UserInfo<"iduser">) => this.createUser(u))
  }

  get isLogged() {
    return Boolean(this.user)
  }

  login({ login, password }: { login: string; password: string }) {
    if (!login) {
      this.setLoginError("Поле не может быть пустым")
      return
    }
    if (!password) {
      this.setPasswordError("Поле не может быть пустым")
      return
    }

    pipi
      .post("login", { login, password })
      .then((u: UserInfo<"iduser">) => this.createUser(u))
      .catch(() => {
        this.setLoginError("Пользователь с таким именем не найден")
      })
  }

  setLoginError(message: string) {
    this.error.login = message
  }

  setPasswordError(message: string) {
    this.error.password = message
  }

  clearError() {
    this.error = <IAuthForm>{}
  }

  createUser(user: UserInfo<"iduser">) {
    this.user = new User(user)
    this.clearError()
  }

  logout() {
    this.user = null
    pipi.get("logout")
  }
}

export default AuthStore
