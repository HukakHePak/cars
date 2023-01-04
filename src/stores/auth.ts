import { makeObservable } from "mobx";
import { pipi } from "../api";
import UserStore from "./user";

export interface IAuthForm {
  login: string;
  password: string;
}

class AuthStore {
  user: UserStore = null;

  error: IAuthForm = { login: null, password: null };

  constructor() {
    makeObservable(this, {
      error: true,
      user: true,
      load: true,
      login: true,
      createUser: true,
      logout: true,
    });
    this.load();
  }

  load() {
    pipi.get("me").then((user) => this.createUser(<UserStore>user));
  }

  login({ login, password }: { login: string; password: string }) {
    if (!login) {
      this.error.login = "Поле не может быть пустым";
      return;
    }
    if (!password) {
      this.error.password = "Поле не может быть пустым";
      return;
    }

    pipi
      .post("login", { login, password })
      .then((user) => this.createUser(<UserStore>user))
      .catch(() => {
        this.error.login = "Пользователь с таким именем не найден";
      });
  }

  createUser(user: UserStore) {
    this.user = new UserStore(user);
    this.error = <IAuthForm>{};
  }

  logout() {
    this.user = undefined;
    pipi.get("logout");
  }
}

export default AuthStore;
