import AuthStore from "./auth";

export default class RootStoreModel {
  auth: AuthStore;

  constructor() {
    this.auth = new AuthStore();
  }
}
