import { makeObservable } from "mobx";
import { api } from "../api";
import UserStore from "./user";

class AuthStore {
  user: UserStore = null;

  constructor() {
    makeObservable(this, {
      user: true,
      load: true,
      login: true,
      createUser: true,
      logout: true,
    });
    this.load();
  }

  load() {
    api
      .get("me")
      .json()
      .then((user) => {
        console.log(user);
        this.createUser(<UserStore>user);
      });
  }

  login({ login, password }: { login: string; password: string }) {
    api
      .post("login", {
        json: { login, password },
      })
      .json()
      .then((user) => {
        this.createUser(<UserStore>user);
      });
  }

  createUser(user: UserStore) {
    this.user = new UserStore(user);
  }

  logout() {
    this.user = undefined;
    api.get("logout");
  }
}

export default AuthStore;
